// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { ProfilePostsHelper } = require("./ProfilePostsHelper.js");

class MembersHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // Fetch information about yourself.
    //
    // Response data: {}
    async self() {
        return await this.#wrapper.get("/members/self");
    }
    
    /* functions */
    // Modify information about yourself.
    //
    // Response data: {}
    async modifySelf(aboutMe, customTitle, signature) {
        return await this.#wrapper.patch("/members/self", {
            "about_me": aboutMe,
            "custom_title": customTitle,
            signature,
        });
    }
    
    // Fetch information about a member.
    //
    // Response data: {}
    async fetch(memberId) {
        return await this.#wrapper.get(`/members/${memberId}`);
    }
    
    // Fetch information about a member by username.
    //
    // Response data: {}
    async fetchByUsername(username) {
        return await this.#wrapper.get(`/members/usernames/${username}`);
    }
    
    // Fetch a list of recently issued bans.
    //
    // Response data: {}
    async bans() {
        return await this.#wrapper.get("/members/bans");
    }

    profilePosts() {
        return new ProfilePostsHelper(this.#wrapper);
    }
}

exports.MembersHelper = MembersHelper;