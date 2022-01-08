// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function (wrapper) {
  this.wrapper = wrapper;
  return this;
};

/* functions */
// List a page of licenses for a given resource.
//
// Response data: {}
object.list = async function (resource_id, sort_options) {
  return await this.wrapper.get(
    `/resources/${resource_id}/licenses`,
    sort_options
  );
};

// List all pages of licenses for a given resource.
//
// Response data: {}
object.list_all = async function (resource_id, sort_options) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/licenses`,
    () => true,
    sort_options
  );
};

// List multiple pages of licenses for a given resource until a condition is no longer met.
//
// Response data: {}
object.list_until = async function (
  resource_id,
  should_continue,
  sort_options
) {
  return await this.wrapper.list_until(
    `/resources/${resource_id}/licenses`,
    should_continue,
    sort_options
  );
};

// Issue a new permanent license for a given resource.
//
// Response data: {}
object.issue_permanent = async function (resource_id, purchaser_id, active) {
  return await this.wrapper.post(`/resources/${resource_id}/licenses`, {
    permanent: true,
    purchaser_id,
    active,
  });
};

// Issue a new temporay license for a given resource.
//
// Response data: {}
object.issue_temporary = async function (
  resource_id,
  purchaser_id,
  start_date,
  end_date
) {
  return await this.wrapper.post(`/resources/${resource_id}/licenses`, {
    permanent: false,
    purchaser_id,
    start_date,
    end_date,
  });
};

// Fetch a license for a given resource.
//
// Response data: {}
object.fetch = async function (resource_id, license_id) {
  return await this.wrapper.get(
    `/resources/${resource_id}/licenses/${license_id}`
  );
};

// Fetch a member's license for a given resource.
//
// Response data: {}
object.fetch_member = async function (resource_id, purchaser_id, fields) {
  let endpoint = `/resources/${resource_id}/licenses/members/${purchaser_id}`;

  if (this.wrapper.token.type === "Shared")
    endpoint += `?nonce=${fields.nonce}&timestamp=${fields.timestamp}`;

  return await this.wrapper.get(endpoint, fields);
};

// Modify a permanent license (and convert to permanent if currently temporary).
object.modify_permanent = async function (resource_id, license_id, active) {
  return await this.wrapper.patch(
    `/resources/${resource_id}/licenses/${license_id}`,
    { permanent: true, active: active }
  );
};

// Modify a temporary license (and convert to temporary if currently permanent).
object.modify_temporary = async function (
  resource_id,
  license_id,
  start_date,
  end_date
) {
  return await this.wrapper.patch(
    `/resources/${resource_id}/licenses/${license_id}`,
    { permanent: false, start_date: start_date, end_date: end_date }
  );
};

/* exports */
module.exports = object;
