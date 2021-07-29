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
object.list = async function(resource_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads`, sort_options);
};

// List downloads by member for a given resource.
object.list_by_member = async function(resource_id, member_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads/members/${member_id}`, sort_options);
};

// List downloads by version for a given resource.
object.list_by_version = async function(resource_id, version_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads/versions/${version_id}`, sort_options);
};

/* exports */
module.exports = object;
