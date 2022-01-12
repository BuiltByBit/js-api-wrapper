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
// List a page of threads you own or collaborate on.
//
// Response data: {}
object.list = async function (sort_options) {
    return await this.wrapper.get("/threads", sort_options);
};

// List all pages of threads you own or collaborate on.
//
// Response data: {}
object.list_all = async function (sort_options) {
    return await this.wrapper.list_until("/threads", () => true, sort_options);
};

// List multiple pages of threads you own or collaborate on until a condition is no longer met.
//
// Response data: {}
object.list_until = async function (should_continue, sort_options) {
    return await this.wrapper.list_until("/threads", should_continue, sort_options);
};

// Fetch information about a thread you own or collaborate on.
//
// Response data: {}
object.fetch = async function (thread_id) {
    return await this.wrapper.get(`/threads/${thread_id}`);
};

// List a page of replies for a thread you own or collaborate on.
//
// Response data: {}
object.list_replies = async function (thread_id, sort_options) {
    return await this.wrapper.get(`/threads/${thread_id}/replies`, sort_options);
};

// List all pages of replies for a thread you own or collaborate on.
//
// Response data: {}
object.list_replies_all = async function (thread_id, sort_options) {
    return await this.wrapper.list_until(`/threads/${thread_id}/replies`, () => true, sort_options);
};

// List multiple pages of replies for a thread you own or collaborate on until a condition is no longer met.
//
// Response data: {}
object.list_replies_until = async function (thread_id, should_continue, sort_options) {
    return await this.wrapper.list_until(`/threads/${thread_id}/replies`, should_continue, sort_options);
};

// Reply to a thread you own or collaborate on.
object.reply = async function (thread_id, message) {
    return await this.wrapper.post(`/threads/${thread_id}/replies`, { message });
};

/* exports */
module.exports = object;
