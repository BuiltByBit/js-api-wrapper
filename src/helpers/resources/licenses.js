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
// List a page of licenses for a given resource (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/licenses`, sort_options);
};

// List all pages of licenses for a given resource (with optional sort options).
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.list_all = async function(resource_id, sort_options) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/licenses`, function(e) { return true; }, sort_options
  );
};

// List multiple pages of licenses for a given resource (with optional sort options) until a condition is no longer
// met.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.list_until = async function(resource_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/licenses`, should_continue, sort_options);
};

// Issue a new license for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.issue = async function(resource_id, fields) {
  return await this.wrapper.post(`/resources/${resource_id}/licenses`, fields);
};

// Fetch a license for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.fetch = async function(resource_id, license_id) {
  return await this.wrapper.get(`/resources/${resource_id}/licenses/${license_id}`);
};

// Modify a license for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.modify = async function(resource_id, license_id, fields) {
  return await this.wrapper.patch(`/resources/${resource_id}/licenses/${license_id}`, fields);
};

// Validate a license for a given resource.
//
// See documentation for response array object fields:
// https://www.mc-market.org/wiki/ultimate-api-v1-resources-licenses/
object.validate = async function(resource_id, license_id, fields) {
  let endpoint = `/resources/${resource_id}/licenses/${license_id}`;

  if (this.wrapper.token.type === "Shared") {
    endpoint += `?nonce=${fields.nonce}&timestamp=${fields.timestamp}`
  }

  return await this.wrapper.get(endpoint, fields);
};

/* exports */
module.exports = object;
