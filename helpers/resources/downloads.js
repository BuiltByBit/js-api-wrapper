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

object.list_all = async function(resource_id, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/downloads`, function(e) {
    return true;
  }, sort_options);
};

object.list_until = async function(resource_id, should_continue, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/downloads`, should_continue, sort_options);
};

// List downloads by member for a given resource.
object.list_by_member = async function(resource_id, member_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads/members/${member_id}`, sort_options);
};

object.list_by_member_all = async function(resource_id, member_id, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/downloads/members/${member_id}`, function(e) {
    return true;
  }, sort_options);
};

object.list_by_member_until = async function(resource_id, member_id, should_continue, sort_options) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/downloads/members/${member_id}`, should_continue, sort_options
  );
};

// List downloads by version for a given resource.
object.list_by_version = async function(resource_id, version_id, sort_options) {
  return await this.wrapper.get(`/resources/${resource_id}/downloads/versions/${version_id}`, sort_options);
};

object.list_by_version_all = async function(resource_id, version_id, sort_options) {
  return await this.wrapper.list_until(`/resources/${resource_id}/downloads/versions/${version_id}`, function(e) {
    return true;
  }, sort_options);
};

object.list_by_version_until = async function(resource_id, version_id, should_continue, sort_options) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/downloads/versions/${version_id}`, should_continue, sort_options
  );
};

/* exports */
module.exports = object;
