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
// List a single page of unread alerts (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-alerts/
object.list = async function(sort_options) {
  return await this.wrapper.get(`/alerts`, sort_options);
};

// List all pages of unread alerts (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-alerts/
object.list_all = async function(sort_options) {
  return await this.wrapper.list_until(`/alerts`, () => true, sort_options);
};

// List multiple pages of unread alerts (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-alerts/
object.list_until = async function(should_continue, sort_options) {
  return await this.wrapper.list_until(`/alerts`, should_continue, sort_options);
};

// Mark unread alerts as read.
object.mark_as_read = async function() {
  return await this.wrapper.patch('/alerts', {read: true});
};

/* exports */
module.exports = object;
