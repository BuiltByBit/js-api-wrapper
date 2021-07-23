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
// List versions for a given resource.
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/versions`, sort_options);
};

// Fetch the latest version for a given resource.
object.latest = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}/versions/latest`);
};

// Fetch a version for a given resource.
object.fetch = async function(resource_id, version_id) {
  return await this.wrapper.get(`/resources/${resource_id}/versions/${version_id}`);
};

// Delete a version for a given resource.
object.delete = async function(resource_id, version_id) {
  return await this.wrapper.delete(`/resources/${resource_id}/versions/${version_id}`);
};

/* exports */
module.exports = object;
