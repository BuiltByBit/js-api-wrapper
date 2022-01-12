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
// List a page of profile posts on your profile.
//
// Response data: {}
object.list = async function (sort_options) {
    return await this.wrapper.get("/members/self/profile-posts", sort_options);
};

// List all pages of profile posts on your profile.
//
// Response data: {}
object.list_all = async function (sort_options) {
    return await this.wrapper.list_until("/members/self/profile-posts", () => true, sort_options);
};

// List multiple pages of profile posts on your profile until a condition is no longer met.
//
// Response data: {}
object.list_until = async function (should_continue, sort_options) {
    return await this.wrapper.list_until("/members/self/profile-posts", should_continue, sort_options);
};

// Fetch information about a profile post on your profile.
//
// Response data: {}
object.fetch = async function (profile_post_id) {
    return await this.wrapper.get(`/members/self/profile-posts/${profile_post_id}`);
};

// Modify a profile post on your profile that you've authored.
object.modify = async function (profile_post_id, message) {
    return await this.wrapper.patch(`/members/self/profile-posts/${profile_post_id}`, { message });
};

// Delete a profile post on your profile that you've authored.
object.delete = async function (profile_post_id) {
    return await this.wrapper.delete(`/members/self/profile-posts/${profile_post_id}`);
};

/* exports */
module.exports = object;
