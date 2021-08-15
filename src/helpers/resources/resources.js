// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function(wrapper) {
  this.wrapper = wrapper;

  // Initialise and insert child helper objects.
  this.downloads = require('./downloads.js').init(object.wrapper);
  this.licenses = require('./licenses.js').init(object.wrapper);
  this.purchases = require('./purchases.js').init(object.wrapper);
  this.reviews = require('./reviews.js').init(object.wrapper);
  this.updates = require('./updates.js').init(object.wrapper);
  this.versions = require('./versions.js').init(object.wrapper);

  return this;
};

/* functions */
// List a page of public resources (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-resources/
object.list = async function(sort_options) {
  return await this.wrapper.get(`/resources`, sort_options);
};

// No helper functions for `list_until` have been provided here for listing public resources. Whilst this breaks
// consistency with the rest of this wrapper, doing so would greatly encourage the undue scraping of our public
// resource list.

// List a page of owned resources (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-resources/
object.list_owned = async function(sort_options) {
  return await this.wrapper.get(`/resources/owned`, sort_options);
};

// List all pages of owned resources (with optional sort options).
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-resources/
object.list_owned_all = async function(sort_options) {
  return await this.wrapper.list_until(`/resources/owned`, function(e) { return true; }, sort_options);
};

// List multiple pages of owned resources (with optional sort options) until a condition is no longer met.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-resources/
object.list_owned_until = async function(should_continue, sort_options) {
  return await this.wrapper.list_until(`/resources/owned`, should_continue, sort_options);
};

// Fetch detailed information about a resource.
//
// See documentation for response array object fields: https://www.mc-market.org/wiki/ultimate-api-v1-resources/
object.fetch = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}`);
};

// Edit resource fields.
object.edit = async function(resource_id, fields) {
  return await this.wrapper.patch(`/resources/${resource_id}`, fields);
};

/* exports */
module.exports = object;
