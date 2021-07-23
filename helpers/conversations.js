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
object.list = async function() {
  return await this.wrapper.get(`/conversations`);
};

object.create = async function(title, message, recipient_id) {
  let body_data = {title: title, message: message, recipient_id: recipient_id};
  return await this.wrapper.post(`/conversations`, body_data);
};

// Fetch a list of replies to an unread conversation
object.list_replies = async function(conversation_id) {
  return await this.wrapper.get(`/conversations/${conversation_id}/replies`);
};

// Reply to an unread conversation
object.reply = async function(conversation_id, message) {
  return await this.wrapper.post(`/conversations/${conversation_id}/replies`, {message: message});
};

/* exports */
module.exports = object;
