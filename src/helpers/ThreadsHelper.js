// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A helper type for thread-related API endpoints. */
class ThreadsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of threads you own or collaborate on.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    async list(sort) {
        return await this.#wrapper.http().get("/threads", sort);
    }
    
    /** List all pages of threads you own or collaborate on.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    async listAll(sort) {
        return await this.#wrapper.http().listUntil("/threads", () => true, sort);
    }
    
    /** List multiple pages of threads you own or collaborate on until a condition is no longer met.
     * 
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listUntil(shouldContinue, sort) {
        return await this.#wrapper.http().listUntil("/threads", shouldContinue, sort);
    }
    
    /** Fetch information about a thread you own or collaborate on.
     * 
     * @param {number} threadId The identifier of the thread.
     * @return {object} A raw data object.
     */
    async fetch(threadId) {
        return await this.#wrapper.http().get(`/threads/${threadId}`);
    }
    
    /** List a page of replies for a thread you own or collaborate on.
     * 
     * @param {number} threadId The identifier of the thread.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listReplies(threadId, sort) {
        return await this.#wrapper.http().get(`/threads/${threadId}/replies`, sort);
    }
    
    /** List all pages of replies for a thread you own or collaborate on.
     * 
     * @param {number} threadId The identifier of the thread.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listRepliesAll(threadId, sort) {
        return await this.#wrapper.http().listUntil(`/threads/${threadId}/replies`, () => true, sort);
    }
    
    /** List multiple pages of replies for a thread you own or collaborate on until a condition is no longer met.
     * 
     * @param {number} threadId The identifier of the thread.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listRepliesUntil(threadId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/threads/${threadId}/replies`, shouldContinue, sort);
    }
    
    /** Reply to a thread you own or collaborate on.
     * 
     * @param {number} threadId The identifier of the thread.
     * @param {string} message The content of the new reply.
     * 
     * @return {number} The identifier of the newly-created post.
     */
    async reply(threadId, message) {
        return await this.#wrapper.http().post(`/threads/${threadId}/replies`, { message });
    }
}

exports.ThreadsHelper = ThreadsHelper;