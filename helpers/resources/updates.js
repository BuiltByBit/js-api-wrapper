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
// List updates for a given resource.
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/updates`, sort_options);
};

// Fetch the latest update for a given resource.
object.latest = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}/updates/latest`);
};

// Fetch an update for a given resource.
object.fetch = async function(resource_id, update_id) {
  return await this.wrapper.get(`/resources/${resource_id}/updates/${update_id}`);
};

// Delete an update for a given resource.
object.delete = async function(resource_id, update_id) {
  return await this.wrapper.delete(`/resources/${resource_id}/updates/${version_id}`);
};

/* exports */
module.exports = object;
