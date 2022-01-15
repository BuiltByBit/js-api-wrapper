// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ConversationsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of unread conversations.
    //
    // Response data: {}
    async list(sortOptions) {
        return await this.#wrapper.http().get("/conversations", sortOptions);
    }
    
    // List all pages of unread conversations.
    //
    // Response data: {}
    async listAll(sortOptions) {
        return await this.#wrapper.http().listUntil("/conversations", () => true, sortOptions);
    }
    
    // List multiple pages of unread conversations until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(shouldContinue, sortOptions) {
        return await this.#wrapper.http().listUntil("/conversations", shouldContinue, sortOptions);
    }
    
    // Start a new conversation.
    //
    // Response data: {}
    async start(title, message, recipientIds) {
        return await this.#wrapper.http().post("/conversations", {
            title,
            message,
            "recipient_ids": recipientIds,
        });
    }
    
    // List a page of replies to an unread conversation.
    //
    // Response data: {}
    async listReplies(conversationId, sortOptions) {
        return await this.#wrapper.http().get(`/conversations/${conversationId}/replies`, sortOptions);
    }
    
    // List all pages of replies to an unread conversation.
    //
    // Response data: {}
    async listRepliesAll(conversationId, sortOptions) {
        return await this.#wrapper.http().listUntil(`/conversations/${conversationId}/replies`, () => true, sortOptions);
    }
    
    // List multiple pages of replies to an unread conversation until a condition is no longer met.
    //
    // Response data: {}
    async listRepliesUntil(conversationId, should_continue, sortOptions) {
        return await this.#wrapper.list_until(`/conversations/${conversationId}/replies`, should_continue, sortOptions);
    }
    
    // Reply to an unread conversation
    //
    // Response data: {}
    async reply(conversationId, message) {
        return await this.#wrapper.http().post(`/conversations/${conversationId}/replies`, {
            message: message,
        });
    }
}
  
exports.ConversationsHelper = ConversationsHelper;
  