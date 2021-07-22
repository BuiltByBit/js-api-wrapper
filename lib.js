// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const axios = require('axios');

const BASE_URL = "https://api.mc-market.org/v1";

/* construct */
let object = {};

/* initialise */
object.init = async function(token) {
  if (typeof token === "undefined" || token.constructor !== Object) {
    return {result: "error", error: {code: "LocalWrapperError", message: "Parameter is undefined or not an object."}};
  }
  if (typeof token.type === "undefined" || typeof token.value === "undefined") {
    return {result: "error", error: {code: "LocalWrapperError", message: "Parameter object token fields missing."}};
  }

  this.client = axios.create({
    baseURL: BASE_URL,
    headers: {"Authorization": token.type + " " + token.value}
  });

  let health_check = await this.health();
  if (health_check.result === "error") {
    return health_check;
  }

  return this;
};

/* functions */
object.get = async function(endpoint) {
  try {
    let response = await this.client.get(endpoint);
    return response.data;
  } catch (error) {
    let response = {
      result: "error",
      error: {
        code: "LocalWrapperError",
        message: error.message
      }
    };

    return response;
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

// Fetch detailed information about yourself.
object.fetch_self = async function() {
  return await this.get(`/members/self`);
};

// Fetch detailed information about a member.
object.fetch_member = async function(member_id) {
  return await this.get(`/members/${member_id}`);
};

// Fetch detailed information about a resource.
object.fetch_resource = async function(resource_id) {
  return await this.get(`/resources/${resource_id}`);
};

 /// Fetch a list of unread conversations.
 object.fetch_conversations = async function() {
   return await this.get(`/conversations`);
 };

 /// Fetch a list of unread conversations.
 object.fetch_conversations = async function() {
   return await this.get(`/conversations`);
 };

 /// Fetch a list of unread alerts.
 object.fetch_alerts = async function() {
   return await this.get(`/alerts`);
 };

 object.helpers = require('./helpers/mod.js');

/* exports */
module.exports = object;
