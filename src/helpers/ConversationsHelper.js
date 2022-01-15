// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A helper type for conversation-related API endpoints. */
class ConversationsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of unread conversations.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    async list(sort) {
        return await this.#wrapper.http().get("/conversations", sort);
    }
    
    /** List all pages of unread conversations.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    async listAll(sort) {
        return await this.#wrapper.http().listUntil("/conversations", () => true, sort);
    }
    
    /** List multiple pages of unread conversations until a condition is no longer met.
     * 
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listUntil(shouldContinue, sort) {
        return await this.#wrapper.http().listUntil("/conversations", shouldContinue, sort);
    }
    
    /** Start a new conversation.
     * 
     * @param {string} title The title of the conversation.
     * @param {string} message The content of the first message in the conversation.
     * @param {Array<number>} recipientIds An array of recipient identifiers.
     * 
     * @return {number} The newly-created conversation identifier.
     */
    async start(title, message, recipientIds) {
        let body = {title, message, "recipient_ids": recipientIds};
        return await this.#wrapper.http().post("/conversations", body);
    }
    
    /** List a page of replies to an unread conversation.
     * 
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listReplies(conversationId, sort) {
        return await this.#wrapper.http().get(`/conversations/${conversationId}/replies`, sort);
    }
    
    /** List all pages of replies to an unread conversation.
     * 
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listRepliesAll(conversationId, sort) {
        return await this.#wrapper.http().listUntil(`/conversations/${conversationId}/replies`, () => true, sort);
    }
    
    /** List multiple pages of replies to an unread conversation until a condition is no longer met.
     * 
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listRepliesUntil(conversationId, shouldContinue, sort) {
        return await this.#wrapper.list_until(`/conversations/${conversationId}/replies`, shouldContinue, sort);
    }
    
    /** Reply to an unread conversation
     * 
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {string} message The content of the new reply.
     * 
     * @return {number} The identifier of the newly-created conversation message.
     */
    async reply(conversationId, message) {
        return await this.#wrapper.http().post(`/conversations/${conversationId}/replies`, {message});
    }
}
  
exports.ConversationsHelper = ConversationsHelper;
  