// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function(wrapper) {
  this.wrapper = wrapper;
  return this;
};

/* functions */
// List a page of threads you own (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads/
object.list = async function(sort_options) {
  return await this.wrapper.get(`/threads`, sort_options);
};

// List all pages of threads you own (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads/
object.list_all = async function(sort_options) {
  return await this.wrapper.list_until(`/threads`, () => true, sort_options);
};

// List multiple pages of threads you own (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads/
object.list_until = async function(should_continue, sort_options) {
  return await this.wrapper.list_until(`/threads`, should_continue, sort_options);
};

// Fetch detailed information about a thread you own.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads/
object.fetch = async function(thread_id) {
  return await this.wrapper.get(`/threads/${thread_id}`);
};

// List a page of replies for a thread you own (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads-replies/
object.list_replies = async function(thread_id, sort_options) {
  return await this.wrapper.get(`/threads/${thread_id}/replies`, sort_options);
};

// List all pages of replies for a thread you own (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads-replies/
object.list_replies_all = async function(thread_id, sort_options) {
  return await this.wrapper.list_until(`/threads/${thread_id}/replies`, () => true, sort_options);
};

// List multiple pages of replies for a thread you own (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-threads-replies/
object.list_replies_until = async function(thread_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/threads/${thread_id}/replies`, should_continue, sort_options);
};

// Reply to a thread you own.
object.reply = async function(thread_id, message) {
  return await this.wrapper.post(`/threads/${thread_id}/replies`, {message: message});
};

/* exports */
module.exports = object;
