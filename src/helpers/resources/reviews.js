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
// List a page of reviews for a given resource (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-reviews/
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/reviews`, sort_options);
};

// List all pages of reviews for a given resource (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-reviews/
object.list_all = async function(resource_id, sort_options) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/reviews`, function(e) { return true; }, sort_options
  );
};

// List multiple pages of reviews for a given resource (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-reviews/
object.list_until = async function(resource_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/reviews`, should_continue, sort_options);
};

// Fetch a resource review by a member for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-reviews/
object.fetch = async function(resource_id, member_id) {
  return await this.wrapper.get(`/resources/${resource_id}/reviews/members/${member_id}`);
};

// Respond to a review for a given resource.
object.respond = async function(resource_id, review_id, message) {
  return await this.wrapper.patch(`/resources/${resource_id}/reviews/${review_id}`, {message: message});
};

/* exports */
module.exports = object;
