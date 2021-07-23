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
// List reviews for a given resource.
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/reviews`, sort_options);
};

// Fetch a resource review by a member for a given resource.
object.fetch = async function(resource_id, member_id) {
  return await this.wrapper.get(`/resources/${resource_id}/reviews/members/${member_id}`);
};

// Respond to a review for a given resource.
object.respond = async function(resource_id, review_id, message) {
  return await this.wrapper.patch(`/resources/${resource_id}/reviews/${review_id}`, {message: message});
};

/* exports */
module.exports = object;
