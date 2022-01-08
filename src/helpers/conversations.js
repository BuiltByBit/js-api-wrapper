// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function (wrapper) {
  this.wrapper = wrapper;
  return this;
};

// List a page of unread conversations.
//
// Response data: {}
object.list = async function (sort_options) {
  return await this.wrapper.get(`/conversations`, sort_options);
};

// List all pages of unread conversations.
//
// Response data: {}
object.list_all = async function (sort_options) {
  return await this.wrapper.list_until(`/conversations`, () => true, sort_options);
};

// List multiple pages of unread conversations until a condition is no longer met.
//
// Response data: {}
object.list_until = async function (should_continue, sort_options) {
  return await this.wrapper.list_until(`/conversations`, should_continue, sort_options);
};

// Start a new conversation.
//
// Response data: {}
object.start = async function (title, message, recipient_ids) {
  return await this.wrapper.post(`/conversations`, {
    title,
    message,
    recipient_ids,
  });
};

// List a page of replies to an unread conversation.
//
// Response data: {}
object.list_replies = async function (conversation_id, sort_options) {
  return await this.wrapper.get(`/conversations/${conversation_id}/replies`, sort_options);
};

// List all pages of replies to an unread conversation.
//
// Response data: {}
object.list_replies_all = async function (conversation_id, sort_options) {
  return await this.wrapper.list_until(`/conversations/${conversation_id}/replies`, () => true, sort_options);
};

// List multiple pages of replies to an unread conversation until a condition is no longer met.
//
// Response data: {}
object.list_replies_until = async function (conversation_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/conversations/${conversation_id}/replies`, should_continue, sort_options);
};

// Reply to an unread conversation
//
// Response data: {}
object.reply = async function (conversation_id, message) {
  return await this.wrapper.post(`/conversations/${conversation_id}/replies`, {
    message: message,
  });
};

/* exports */
module.exports = object;
