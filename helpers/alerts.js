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
// Fetch a list of unread alerts.
object.list = async function(sort_options) {
  return await this.wrapper.get(`/alerts`, sort_options);
};

// Mark unread alerts as read
object.mark_as_read = async function() {
  return await this.wrapper.patch('/alerts', {read: true});
};

/* exports */
module.exports = object;
