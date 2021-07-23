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
// List profile posts on your profile.
object.list = async function(sort_options) {
  return await this.wrapper.get(`/members/self/profile-posts`, sort_options);
};

// Fetch information about a profile post on your profile.
object.fetch = async function(profile_post_id) {
  return await this.wrapper.get(`/members/self/profile-posts/${profile_post_id}`);
};

// Edit a profile post on your profile that you've authored.
object.edit = async function(profile_post_id, message) {
  return await this.wrapper.patch(`/members/self/profile-posts/${profile_post_id}`, {message: message});
};

// Delete a profile post on your profile that you've authored.
object.delete = async function(profile_post_id) {
  return await this.wrapper.delete(`/members/self/profile-posts/${profile_post_id}`);
};

/* exports */
module.exports = object;
