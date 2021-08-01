// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function(wrapper) {
  this.wrapper = wrapper;
  return this;
};

// Fetch a list of unread conversations.
object.list = async function(sort_options) {
  return await this.wrapper.get(`/conversations`, sort_options);
};

// Fetch a list of all unread conversations.
object.list_all = async function(sort_options) {
  return await this.wrapper.list_until(`/conversations`, function(e) { return true; }, sort_options);
};

// Fetch a list of all unread conversations.
object.list_until = async function(should_continue, sort_options) {
  return await this.wrapper.list_until(`/conversations`, should_continue, sort_options);
};

object.create = async function(title, message, recipient_id) {
  let body_data = {title: title, message: message, recipient_id: recipient_id};
  return await this.wrapper.post(`/conversations`, body_data);
};

// Fetch a list of replies to an unread conversation
object.list_replies = async function(conversation_id, sort_options) {
  return await this.wrapper.get(`/conversations/${conversation_id}/replies`, sort_options);
};

// Fetch a list of replies to an unread conversation
object.list_replies_all = async function(conversation_id, sort_options) {
  return await this.wrapper.list_until(`/conversations/${conversation_id}/replies`, function(e) {
    return true;
  }, sort_options);
};

// Fetch a list of replies to an unread conversation
object.list_replies_until = async function(conversation_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/conversations/${conversation_id}/replies`, should_continue, sort_options);
};

// Reply to an unread conversation
object.reply = async function(conversation_id, message) {
  return await this.wrapper.post(`/conversations/${conversation_id}/replies`, {message: message});
};

/* exports */
module.exports = object;
