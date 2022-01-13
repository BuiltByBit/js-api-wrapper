// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ProfilePostsHelper {
    #wrapper;
    
    constructor(wrapper) {
      this.#wrapper = wrapper;
    }
    
    // List a page of profile posts on your profile.
    //
    // Response data: {}
    async list(sort_options) {
      return await this.#wrapper.get("/members/self/profile-posts", sort_options);
    }
    
    // List all pages of profile posts on your profile.
    //
    // Response data: {}
    async list_all(sort_options) {
      return await this.#wrapper.list_until("/members/self/profile-posts", () => true, sort_options);
    }
    
    // List multiple pages of profile posts on your profile until a condition is no longer met.
    //
    // Response data: {}
    async list_until(should_continue, sort_options) {
      return await this.#wrapper.list_until("/members/self/profile-posts", should_continue, sort_options);
    }
    
    // Fetch information about a profile post on your profile.
    //
    // Response data: {}
    async fetch(profile_post_id) {
      return await this.#wrapper.get(`/members/self/profile-posts/${profile_post_id}`);
    }
    
    // Modify a profile post on your profile that you've authored.
    async modify(profile_post_id, message) {
      return await this.#wrapper.patch(`/members/self/profile-posts/${profile_post_id}`, { message });
    }
    
    // Delete a profile post on your profile that you've authored.
    async delete(profile_post_id) {
      return await this.#wrapper.delete(`/members/self/profile-posts/${profile_post_id}`);
    }
}

exports.ProfilePostsHelper = ProfilePostsHelper;