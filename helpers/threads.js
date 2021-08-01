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
// Fetch a list of threads you own.
object.list = async function(sort_options) {
  return await this.wrapper.get(`/threads`, sort_options);
};

object.list_all = async function(sort_options) {
  return await this.wrapper.list_until(`/threads`, function(e) { return true; }, sort_options);
};

object.list_until = async function(should_continue, sort_options) {
  return await this.wrapper.list_until(`/threads`, should_continue, sort_options);
};

// Fetch detailed information about a thread you own.
object.fetch = async function(thread_id) {
  return await this.wrapper.get(`/threads/${thread_id}`);
};

// List replies for a thread you own.
object.list_replies = async function(thread_id, sort_options) {
  return await this.wrapper.get(`/threads/${thread_id}/replies`, sort_options);
};

object.list_replies_all = async function(thread_id, sort_options) {
  return await this.wrapper.list_until(`/threads/${thread_id}/replies`, function(e) { return true; }, sort_options);
};

object.list_replies_until = async function(thread_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/threads/${thread_id}/replies`, should_continue, sort_options);
};

// Reply to a thread you own.
object.reply = async function(thread_id, message) {
  return await this.wrapper.post(`/threads/${thread_id}/replies`, {message: message});
};

/* exports */
module.exports = object;
