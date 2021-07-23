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
// List resources
object.list = async function() {
  return await this.wrapper.get(`/resources`);
};

// Fetch detailed information about a resource.
object.fetch = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}`);
};

/* exports */
module.exports = object;
