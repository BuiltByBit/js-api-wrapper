// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { ProfilePostsHelper } = require("./ProfilePostsHelper.js");

/** A helper type for member-related API endpoints. */
class MembersHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** Fetch information about yourself.
     * 
     * @return {object} A raw data object.
     */
    async self() {
        return await this.#wrapper.http().get("/members/self");
    }
    
    /** Modify information about yourself.
     * 
     * @param {string} aboutMe The 'about me' field content, or undefined.
     * @param {string} customTitle The 'custom title' field content, or undefined.
     * @param {string} signature The 'signature' field content, or undefined.
     */
    async modifySelf(aboutMe, customTitle, signature) {
        let body = {"about_me": aboutMe, "custom_title": customTitle, signature};
        return await this.#wrapper.http().patch("/members/self", body);
    }
    
    /** Fetch information about a member.
     * 
     * @param {number} memberId The identifier of the member.
     * @return {object} A raw data object.
     */
    async fetch(memberId) {
        return await this.#wrapper.http().get(`/members/${memberId}`);
    }
    
    /** Fetch information about a member by username.
     * 
     * @param {string} username The username of the member.
     * @return {object} A raw data object.
     */
    async fetchByUsername(username) {
        return await this.#wrapper.http().get(`/members/usernames/${username}`);
    }
    
    /** Fetch a list of recently issued bans.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async bans() {
        return await this.#wrapper.http().get("/members/bans");
    }

    /** Access profile post-related helper functions.
     * 
     * @return {ProfilePostsHelper} A newly-constructed profile post helper instance.
     */
    profilePosts() {
        return new ProfilePostsHelper(this.#wrapper);
    }
}

exports.MembersHelper = MembersHelper;