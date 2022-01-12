// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function (wrapper) {
    this.wrapper = wrapper;

    // Initialise and insert child helper object.
    this.profile_posts = require("./profile_posts.js").init(object.wrapper);

    return this;
};

/* functions */
// Fetch information about yourself.
//
// Response data: {}
object.self = async function () {
    return await this.wrapper.get("/members/self");
};

/* functions */
// Modify information about yourself.
//
// Response data: {}
object.modify_self = async function (about_me, custom_title, signature) {
    return await this.wrapper.patch("/members/self", {
        about_me,
        custom_title,
        signature,
    });
};

// Fetch information about a member.
//
// Response data: {}
object.fetch = async function (member_id) {
    return await this.wrapper.get(`/members/${member_id}`);
};

// Fetch information about a member by username.
//
// Response data: {}
object.fetch_by_username = async function (username) {
    return await this.wrapper.get(`/members/usernames/${username}`);
};

// Fetch a list of recently issued bans.
//
// Response data: {}
object.bans = async function () {
    return await this.wrapper.get("/members/bans");
};

/* exports */
module.exports = object;
