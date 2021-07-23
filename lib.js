// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* imports */
const axios = require('axios');
const debug = require('debug')('mcm-js-api-wrapper');

/* constants */
// MC-Market's base API URL and version which will be prepended to non-absolute paths by axios.
const BASE_URL = "https://api.mc-market.org/v1";

/* construct */
let object = {};

/* initialise */
// Initialise the wrapper with a provided API token.
//
// Accepts an object parameter with the required fields 'type' and 'value'.
//
// Note:
// During the initialisation process, we make a request to the `health` endpoint which we expect to always succeed
// under nominal conditions. If the request does fail, we expect subsequent requests to other endpoints to also fail
// so we conclude that an initialisation failure has occured. We pass back to the caller the error we received. As
// a result, a check for the presence of the 'result' field should be done by the caller afer this function returns.
object.init = async function(token) {
  // Ensure parameter is valid and contains the required fields.
  if (typeof token === "undefined" || token.constructor !== Object) {
    return {result: "error", error: {code: "LocalWrapperError", message: "Parameter is undefined or not an object."}};
  }
  if (typeof token.type === "undefined" || typeof token.value === "undefined") {
    return {result: "error", error: {code: "LocalWrapperError", message: "Parameter object token fields missing."}};
  }

  // Create axios instance with our base URL and default headers.
  this.client = axios.create({
    baseURL: BASE_URL,
    headers: {"Authorization": token.type + " " + token.value}
  });

  // Insert rate limiting store object.
  this.rate_limits = {
    read_last_retry: 0,
    read_last_request: Date.now(),
    write_last_retry: 0,
    write_last_request: Date.now()
  };

  // Make a request to the health endpoint. If errored, return the provided error instead of the wrapper object.
  let health_check = await this.health();
  if (health_check.result === "error") {
    return health_check;
  }

  return this;
};

/* functions */
// Compute how long, if at all, we should stall the next request in order to be compliant with rate limiting.
//
// Note:
// If stalling is required, it will be handled by the inner `stall_for_helper` function. Thus, once we return from
// this function, the caller can be sure that we're now within rate limiting rules and can freely make its request.
object.stall_if_required = async function(write) {
  let stall = true;

  while(stall) {
    let time = Date.now();
    let limits = this.rate_limits;

    // As rate limits for WRITE operations are applied independently of those applied to READ operations, we first
    // determine if we're in a WRITE operation, and if we are, attempt to stall if required. `stall_for_helper` will
    // return true if a stall was required (and it completed the stall), or false if no stall was required.
    if (write && await this.stall_for_helper(limits.write_last_retry, limits.write_last_request, time)) {
      continue;
    } else if (write) {
      stall = false;
      continue;
    }

    // If we haven't started a new iteration of this loop yet, we must be in a READ operation.
    if (await this.stall_for_helper(limits.read_last_retry, limits.read_last_request, time)) {
      continue;
    } else {
      stall = false;
    }
  }
};

// A helper function for `stall_if_required` which computes over a generic set of rate limiting parameters.
object.stall_for_helper = async function(last_retry, last_request, time) {
  // If we've previously hit a rate limit, no other request has been completed with a non-429 response since, and
  // we're still within the Retry-After delay period, we should stall this request. The exact amount of time we stall
  // for derives from the amount of time that has passed since the last request, minus the Retry-After value.
  if (last_retry > 0 && (time - last_request) < last_retry) {
    let stall_for = last_retry - (time - last_request);
    debug(`Stalling request for ${stall_for}ms.`);
    await new Promise(resolve => setTimeout(resolve, stall_for));

    return true;
  } else {
    return false;
  }
};

object.get = async function(endpoint) {
  try {
    await this.stall_if_required(false);
    let response = await this.client.get(endpoint);

    this.rate_limits.read_last_request = Date.now();
    this.rate_limits.read_last_retry = 0;

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      this.rate_limits.read_last_retry = error.response.headers["retry-after"];
      this.rate_limits.read_last_request = Date.now();

      return await this.get(endpoint);
    } else if (error.response) {
      return error.response.data;
    } else {
      return {result: "error", error: {code: "LocalWrapperError", message: error.message}};
    }
  }
};

object.patch = async function(endpoint, body) {
  try {
    await this.stall_if_required(true);
    let response = await this.client.patch(endpoint, body);

    this.rate_limits.write_last_request = Date.now();
    this.rate_limits.write_last_retry = 0;

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      this.rate_limits.write_last_retry = error.response.headers["retry-after"];
      this.rate_limits.write_last_request = Date.now();

      return await this.patch(endpoint, body);
    } else if (error.response) {
      return error.response.data;
    } else {
      return {result: "error", error: {code: "LocalWrapperError", message: error.message}};
    }
  }
};

object.post = async function(endpoint, body) {
  try {
    await this.stall_if_required(true);
    let response = await this.client.post(endpoint, body);

    this.rate_limits.write_last_request = Date.now();
    this.rate_limits.write_last_retry = 0;

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      this.rate_limits.write_last_retry = error.response.headers["retry-after"];
      this.rate_limits.write_last_request = Date.now();

      return await this.patch(endpoint, body);
    } else if (error.response) {
      return error.response.data;
    } else {
      return {result: "error", error: {code: "LocalWrapperError", message: error.message}};
    }
  }
};

// Schedule a plain request which we expect to always succeed under nominal conditions.
object.health = async function() {
  return await this.get(`/health`);
};

// Schedule a plain request and measure how long the API took to respond.
//
// Note:
// This duration may not be representative of the raw request latency due to the fact that requests may be stalled
// locally within this wrapper to ensure compliance with rate limiting rules. Whilst this is a trade-off, it can
// be argued that the returned duration will be more representative of the true latencies experienced.
object.ping = async function() {
  let start = Date.now();
  let response = await this.health();
  let stop = Date.now();

  if (response.result === "success") {
    response.data = stop - start;
  }

  return response;
};

// Initialise and insert all helper objects.
object.alerts = require('./helpers/alerts.js').init(object);
object.conversations = require('./helpers/conversations.js').init(object);
object.members = require('./helpers/members.js').init(object);
object.resources = require('./helpers/resources.js').init(object);
object.threads = require('./helpers/threads.js').init(object);

/* exports */
module.exports = object;
