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
// List a page of reviews for a given resource.
//
// Response data: {}
object.list = async function (resource_id, sort_options) {
    return await this.wrapper.get(`/resources/${resource_id}/reviews`, sort_options);
};

// List all pages of reviews for a given resource.
//
// Response data: {}
object.list_all = async function (resource_id, sort_options) {
    return await this.wrapper.list_until(`/resources/${resource_id}/reviews`, () => true, sort_options);
};

// List multiple pages of reviews for a given resource until a condition is no longer met.
//
// Response data: {}
object.list_until = async function (resource_id, should_continue, sort_options) {
    return await this.wrapper.list_until(`/resources/${resource_id}/reviews`, should_continue, sort_options);
};

// Fetch a resource review by a member for a given resource.
//
// Response data: {}
object.fetch = async function (resource_id, member_id) {
    return await this.wrapper.get(`/resources/${resource_id}/reviews/members/${member_id}`);
};

// Respond to a review for a given resource.
object.respond = async function (resource_id, review_id, response) {
    return await this.wrapper.patch(`/resources/${resource_id}/reviews/${review_id}`, { response });
};

/* exports */
module.exports = object;
