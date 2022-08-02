// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { ProfilePostsHelper } = require("./ProfilePostsHelper.js");

/**
 * @typedef {object} Member
 * @property {number} member_id
 * @property {string} username
 * @property {number} join_date
 * @property {number} [last_activity_date]
 * @property {boolean} banned
 * @property {boolean} suspended
 * @property {boolean} restricted
 * @property {boolean} disabled
 * @property {boolean} premium
 * @property {boolean} supreme
 * @property {boolean} ultimate
 * @property {number} [discord_id]
 * @property {string} avatar_url
 * @property {number} post_count
 * @property {number} resource_count
 * @property {number} purchase_count
 * @property {number} feedback_positive
 * @property {number} feedback_neutral
 * @property {number} feedback_negative
 */

/**
 * @typedef {object} Ban
 * @property {number} member_id
 * @property {number} banned_by_id
 * @property {number} ban_date
 * @property {string} reason
 */

/** A helper type for member-related API endpoints. */
class MembersHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** Fetch information about yourself.
     * 
     * @return {Member} A raw data object.
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
     * @return {Member} A raw data object.
     */
    async fetch(memberId) {
        return await this.#wrapper.http().get(`/members/${memberId}`);
    }
    
    /** Fetch information about a member by username.
     * 
     * @param {string} username The username of the member.
     * @return {Member} A raw data object.
     */
    async fetchByUsername(username) {
        return await this.#wrapper.http().get(`/members/usernames/${username}`);
    }

    /** Fetch information about a member by Discord identifier.
     * 
     * @param {string} discordId The identifier of the Discord account.
     * @return {Member} A raw data object.
     */
    async fetchByDiscord(discordId) {
        return await this.#wrapper.http().get(`/members/discords/${discordId}`);
    }
    
    /** Fetch a list of recently issued bans.
     * 
     * @return {Array<Ban>} An array of raw data objects.
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