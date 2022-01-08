// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/* imports */
const axios = require("axios");
const debug = require("debug")("mcm-js-api-wrapper");
const utils = require("./utils.js");

/* constants */
// The base API URL and version which will be prepended to non-absolute paths by axios.
const BASE_URL = "https://api.mc-market.org/v1";

// The maximum number of objects returned by a list endpoint for a single request.
const PER_PAGE = 20;

// The content type used for WRITE operations with bodies (ie. POST/PATCH).
const WRITE_CONTENT_TYPE = "application/json";

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
object.init = async function (token) {
  // Ensure parameter is valid and contains the required fields.
  if (typeof token === "undefined" || token.constructor !== Object) {
    return {
      result: "error",
      error: {
        code: "LocalWrapperError",
        message: "Parameter is undefined or not an object.",
      },
    };
  }
  if (typeof token.type === "undefined" || typeof token.value === "undefined") {
    return {
      result: "error",
      error: {
        code: "LocalWrapperError",
        message: "Parameter object token fields missing.",
      },
    };
  }

  this.token = token;

  // Create axios instance with our base URL and default headers.
  this.client = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: token.type + " " + token.value },
  });

  // Insert rate limiting store object.
  this.rate_limits = {
    read_last_retry: 0,
    read_last_request: Date.now(),
    write_last_retry: 0,
    write_last_request: Date.now(),
  };

  // Make a request to the health endpoint. If errored, return the provided error instead of the wrapper object.
  let health_check = await this.health();
  if (health_check.result === "error") {
    return health_check;
  }

  return { result: "success" };
};

/* functions */
// A raw function which makes a GET request to a specific endpoint (with optional sort options).
object.get = async function (endpoint, sort_options) {
  try {
    if (sort_options) {
      endpoint += utils.object_to_query_string(sort_options);
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
      return {
        result: "error",
        error: { code: "LocalWrapperError", message: error.message },
      };
    }
  }
};

// A raw function which makes a PATCH request to a specific endpoint with a body.
object.patch = async function (endpoint, body) {
  try {
    await utils.stall_if_required(this.rate_limits, true);
    let response = await this.client.patch(endpoint, body, {
      headers: { "Content-Type": WRITE_CONTENT_TYPE },
    });

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
      return {
        result: "error",
        error: { code: "LocalWrapperError", message: error.message },
      };
    }
  }
};

// A raw function which makes a POST request to a specific endpoint with a body.
object.post = async function (endpoint, body) {
  try {
    await utils.stall_if_required(this.rate_limits, true);
    let response = await this.client.post(endpoint, body, {
      headers: { "Content-Type": WRITE_CONTENT_TYPE },
    });

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
      return {
        result: "error",
        error: { code: "LocalWrapperError", message: error.message },
      };
    }
  }
};

// A raw function which makes a DELETE request to a specific endpoint.
object.delete = async function (endpoint) {
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
      return {
        result: "error",
        error: { code: "LocalWrapperError", message: error.message },
      };
    }
  }
};

// A raw function returning a compiled list of objects from all available pages or until we decide to stop.
//
// 'should_continue' expects a function with a single parameter and should return a boolean representing if we should
// continue to add the current (and future) objects to the final list (and thus, if we should continue to make
// requests). This function is called for every single object as a parameter within each request's returned list.
//
// This function continuously makes requests to a specific endpoint with a set of sort options, and increments the sort
// option page count after each request.
object.list_until = async function (endpoint, should_continue, sort_options) {
  // Ensure an object is initialised if undefined, and that the page field exists.
  if (typeof sort_options === "undefined") {
    sort_options = {};
  }
  if (typeof sort_options.page === "undefined") {
    sort_options.page = 1;
  }

  let all_data = [];
  let continue_for = true;

  // This is continued until we either encounter an error, `should_continue` returns false, or we've reached the last
  // page (ie. data.length() != PER_PAGE).
  while (continue_for) {
    // If any requests return an error, pass the response to the caller rather than continuing.
    let response = await this.get(endpoint, sort_options);
    if (response.result === "error") {
      return response;
    }

    for (index in response.data) {
      if (should_continue(response.data[index])) {
        all_data.push(response.data[index]);
      } else {
        continue_for = false;
        break;
      }
    }

    if (response.data.length != PER_PAGE) {
      continue_for = false;
    }

    sort_options.page++;
  }

  return { result: "success", data: all_data };
};

// Schedule a plain request which we expect to always succeed under nominal conditions.
object.health = async function () {
  return await this.get(`/health`);
};

// Schedule a plain request and measure how long the API took to respond.
//
// Note:
// This duration may not be representative of the raw request latency due to the fact that requests may be stalled
// locally within this wrapper to ensure compliance with rate limiting rules. Whilst this is a trade-off, it can
// be argued that the returned duration will be more representative of the true latencies experienced.
object.ping = async function () {
  let start = Date.now();
  let response = await this.health();
  let stop = Date.now();

  if (response.result === "success") {
    response.data = stop - start;
  }

  return response;
};

// Initialise and insert all helper objects.
object.alerts = require("./helpers/alerts.js").init(object);
object.conversations = require("./helpers/conversations.js").init(object);
object.members = require("./helpers/members/members.js").init(object);
object.resources = require("./helpers/resources/resources.js").init(object);
object.threads = require("./helpers/threads.js").init(object);

/* exports */
module.exports = object;
