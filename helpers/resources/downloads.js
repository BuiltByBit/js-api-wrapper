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
// List downloads for a given resource.
object.list = async function(resource_id) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads`);
};

// List downloads by member for a given resource.
object.list = async function(resource_id, member_id) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads/members/${member_id}`);
};

// List downloads by version for a given resource.
object.list = async function(resource_id, version_id) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads/versions/${version_id}`);
};

/* exports */
module.exports = object;
