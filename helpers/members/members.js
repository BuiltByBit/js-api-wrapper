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
// Fetch detailed information about yourself.
object.self = async function() {
  return await this.wrapper.get(`/members/self`);
};

// Fetch detailed information about a member.
object.fetch = async function(member_id) {
  return await this.wrapper.get(`/members/${member_id}`);
};

// Initialise and insert child helper object.
object.profile_posts = require('./profile_posts.js').init(object);

/* exports */
module.exports = object;
