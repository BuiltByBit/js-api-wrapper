const axios = require('axios');

const BASE_URL = "https://api.mc-market.org/v1";

/* construct */
let object = {};

/* initialise */
object.init = async function(token) {
  if (typeof token === "undefined") {
    return {};
  }
  if (typeof token.type === "undefined" || typeof token.value === "undefined") {
    return {};
  }

  this.client = axios.create({
    baseURL: BASE_URL,
    headers: {"Authorization": token.type + " " + token.value}
  });

  let health_check = await this.health();
  if (health_check.result === "error") {
    return {};
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

/* exports */
module.exports = object;
