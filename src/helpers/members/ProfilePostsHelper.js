// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/**
 * @typedef {object} ProfilePost
 * @property {number} profile_post_id
 * @property {number} author_id
 * @property {number} post_date
 * @property {string} message
 * @property {number} comment_count
 */

/** A helper type for profile post-related API endpoints. */
class ProfilePostsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of profile posts on your profile.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<ProfilePost>} An array of raw data objects.
     */
    async list(sort) {
        return await this.#wrapper.http().get("/members/self/profile-posts", sort);
    }
    
    /** List all pages of profile posts on your profile.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<ProfilePost>} An array of raw data objects.
     */
    async listAll(sort) {
        return await this.#wrapper.http().listUntil("/members/self/profile-posts", () => true, sort);
    }
    
    /** List multiple pages of profile posts on your profile until a condition is no longer met.
     * 
     * @param {function(ProfilePost):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<ProfilePost>} An array of raw data objects.
     */
    async listUntil(shouldContinue, sort) {
        return await this.#wrapper.http().listUntil("/members/self/profile-posts", shouldContinue, sort);
    }
    
    /** Fetch information about a profile post on your profile.
     * 
     * @param {number} profilePostId The identifier of the profile post to fetch.
     * @return {ProfilePost} A raw data object.
     */
    async fetch(profilePostId) {
        return await this.#wrapper.http().get(`/members/self/profile-posts/${profilePostId}`);
    }
    
    /** Create a new profile post on your profile.
     * 
     * @param {string} message The content of the message to modify to.
     * @return {number} The identifer of the newly-created profile post.
     */
    async create(message) {
        return await this.#wrapper.http().post("/members/self/profile-posts", { message });
    }
        
    /** Modify a profile post on your profile that you've authored.
     * 
     * @param {number} profilePostId The identifier of the profile post to modify.
     * @param {string} message The content of the message to modify to.
     */
    async modify(profilePostId, message) {
        return await this.#wrapper.http().patch(`/members/self/profile-posts/${profilePostId}`, { message });
    }
        
    /** Delete a profile post on your profile that you've authored.
     * 
     * @param {number} profilePostId The identifier of the profile post to delete.
     */
    async delete(profilePostId) {
        return await this.#wrapper.http().delete(`/members/self/profile-posts/${profilePostId}`);
    }
}

exports.ProfilePostsHelper = ProfilePostsHelper;