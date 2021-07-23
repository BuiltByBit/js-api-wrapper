// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* imports */
const axios = require('axios');
const debug = require('debug')('mcm-js-api-wrapper');
const utils = require('./utils.js');

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

  this.token = token;

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
object.get = async function(endpoint, sort_options) {
  try {
    if (sort_options) {
      endpoint += utils.sort_options_to_query(sort_options);
    }

    await utils.stall_if_required(this.rate_limits, false);
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
    await utils.stall_if_required(this.rate_limits, true);
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
    await utils.stall_if_required(this.rate_limits, true);
    let response = await this.client.post(endpoint, body);

    this.rate_limits.write_last_request = Date.now();
    this.rate_limits.write_last_retry = 0;

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      this.rate_limits.write_last_retry = error.response.headers["retry-after"];
      this.rate_limits.write_last_request = Date.now();

      return await this.post(endpoint, body);
    } else if (error.response) {
      return error.response.data;
    } else {
      return {result: "error", error: {code: "LocalWrapperError", message: error.message}};
    }
  }
};

object.delete = async function(endpoint) {
  try {
    await utils.stall_if_required(this.rate_limits, true);
    let response = await this.client.delete(endpoint);

    this.rate_limits.write_last_request = Date.now();
    this.rate_limits.write_last_retry = 0;

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      this.rate_limits.write_last_retry = error.response.headers["retry-after"];
      this.rate_limits.write_last_request = Date.now();

      return await this.delete(endpoint);
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
object.members = require('./helpers/members/members.js').init(object);
object.resources = require('./helpers/resources/resources.js').init(object);
object.threads = require('./helpers/threads.js').init(object);

/* exports */
module.exports = object;
