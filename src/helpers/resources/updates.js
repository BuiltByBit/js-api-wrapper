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
// List a page of updates for a given resource (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-updates/
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/updates`, sort_options);
};

// List all pages of updates for a given resource (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-updates/
object.list_all = async function(resource_id, sort_options) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/updates`, function(e) { return true; }, sort_options
  );
};

// List multiple pages of updates for a given resource (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-updates/
object.list_until = async function(resource_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/updates`, should_continue, sort_options);
};

// Fetch the latest update for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-updates/
object.latest = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}/updates/latest`);
};

// Fetch an update for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-updates/
object.fetch = async function(resource_id, update_id) {
  return await this.wrapper.get(`/resources/${resource_id}/updates/${update_id}`);
};

// Delete an update for a given resource.
object.delete = async function(resource_id, update_id) {
  return await this.wrapper.delete(`/resources/${resource_id}/updates/${version_id}`);
};

/* exports */
module.exports = object;
