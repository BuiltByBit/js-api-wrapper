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
    async list(sortOptions) {
        return await this.#wrapper.get("/members/self/profile-posts", sortOptions);
    }
    
    // List all pages of profile posts on your profile.
    //
    // Response data: {}
    async listAll(sortOptions) {
        return await this.#wrapper.listUntil("/members/self/profile-posts", () => true, sortOptions);
    }
    
    // List multiple pages of profile posts on your profile until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil("/members/self/profile-posts", shouldContinue, sortOptions);
    }
    
    // Fetch information about a profile post on your profile.
    //
    // Response data: {}
    async fetch(profilePostId) {
        return await this.#wrapper.get(`/members/self/profile-posts/${profilePostId}`);
    }
    
    // Modify a profile post on your profile that you've authored.
    async modify(profilePostId, message) {
        return await this.#wrapper.patch(`/members/self/profile-posts/${profilePostId}`, { message });
    }
    
    // Delete a profile post on your profile that you've authored.
    async delete(profilePostId) {
        return await this.#wrapper.delete(`/members/self/profile-posts/${profilePostId}`);
    }
}

exports.ProfilePostsHelper = ProfilePostsHelper;