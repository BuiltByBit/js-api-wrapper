// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function(wrapper) {
  this.wrapper = wrapper;
  return this;
};

/* functions */
// List a page of versions for a given resource.
//
// Response data: {}
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/versions`, sort_options);
};

// List all pages of versions for a given resource.
//
// Response data: {}
object.list_all = async function(resource_id, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/versions`, () => true, sort_options);
};

// List multiple pages of versions for a given resource until a condition is no longer
// met.
//
// Response data: {}
object.list_until = async function(resource_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/versions`, should_continue, sort_options);
};

// Fetch the latest version for a given resource.
//
// Response data: {}
object.latest = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}/versions/latest`);
};

// Fetch a version for a given resource.
//
// Response data: {}
object.fetch = async function(resource_id, version_id) {
  return await this.wrapper.get(`/resources/${resource_id}/versions/${version_id}`);
};

// Delete a version for a given resource.
object.delete = async function(resource_id, version_id) {
  return await this.wrapper.delete(`/resources/${resource_id}/versions/${version_id}`);
};

/* exports */
module.exports = object;
