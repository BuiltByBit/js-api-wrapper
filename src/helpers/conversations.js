// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function(wrapper) {
  this.wrapper = wrapper;
  return this;
};

// List a page of unread conversations (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-conversations/
object.list = async function(sort_options) {
  return await this.wrapper.get(`/conversations`, sort_options);
};

// List all pages of unread conversations (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-conversations/
object.list_all = async function(sort_options) {
  return await this.wrapper.list_until(`/conversations`, () => true, sort_options);
};

// List multiple pages of unread conversations (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-conversations/
object.list_until = async function(should_continue, sort_options) {
  return await this.wrapper.list_until(`/conversations`, should_continue, sort_options);
};

// Create a new conversation.
object.create = async function(title, message, recipient_id) {
  let body_data = {title: title, message: message, recipient_id: recipient_id};
  return await this.wrapper.post(`/conversations`, body_data);
};

// List a page of replies to an unread conversation (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-conversations-replies/
object.list_replies = async function(conversation_id, sort_options) {
  return await this.wrapper.get(`/conversations/${conversation_id}/replies`, sort_options);
};

// List all pages of replies to an unread conversation (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-conversations-replies/
object.list_replies_all = async function(conversation_id, sort_options) {
  return await this.wrapper.list_until(`/conversations/${conversation_id}/replies`, function(e) {
    return true;
  }, sort_options);
};

// List multiple pages of replies to an unread conversation (with optional sort options) until a condition is no longer
// met.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-conversations-replies/
object.list_replies_until = async function(conversation_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/conversations/${conversation_id}/replies`, should_continue, sort_options);
};

// Reply to an unread conversation
object.reply = async function(conversation_id, message) {
  return await this.wrapper.post(`/conversations/${conversation_id}/replies`, {message: message});
};

/* exports */
module.exports = object;
