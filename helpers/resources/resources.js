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
// List public resources.
object.list = async function() {
  return await this.wrapper.get(`/resources`);
};

// List owned resources.
object.list_owned = async function() {
  return await this.wrapper.get(`/resources/owned`);
};

// Fetch detailed information about a resource.
object.fetch = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}`);
};

// Edit resource fields.
object.edit = async function(fields) {
  return await this.wrapper.patch(`/resources/${resource_id}`, fields);
};

// Initialise and insert child helper objects.
object.downloads = require('./downloads.js').init(object);
object.licenses = require('./licenses.js').init(object);
object.purchases = require('./purchases.js').init(object);
object.reviews = require('./reviews.js').init(object);
object.updates = require('./updates.js').init(object);
object.versions = require('./versions.js').init(object);

/* exports */
module.exports = object;
