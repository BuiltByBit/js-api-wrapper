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
    async list(sort_options) {
      return await this.#wrapper.get("/conversations", sort_options);
    }
    
    // List all pages of unread conversations.
    //
    // Response data: {}
    async list_all(sort_options) {
      return await this.#wrapper.list_until("/conversations", () => true, sort_options);
    }
    
    // List multiple pages of unread conversations until a condition is no longer met.
    //
    // Response data: {}
    async list_until(should_continue, sort_options) {
      return await this.#wrapper.list_until("/conversations", should_continue, sort_options);
    }
    
    // Start a new conversation.
    //
    // Response data: {}
    async start(title, message, recipient_ids) {
      return await this.#wrapper.post("/conversations", {
        title,
        message,
        recipient_ids,
      });
    }
    
    // List a page of replies to an unread conversation.
    //
    // Response data: {}
    async list_replies(conversation_id, sort_options) {
      return await this.#wrapper.get(`/conversations/${conversation_id}/replies`, sort_options);
    }
    
    // List all pages of replies to an unread conversation.
    //
    // Response data: {}
    async list_replies_all(conversation_id, sort_options) {
      return await this.#wrapper.list_until(`/conversations/${conversation_id}/replies`, () => true, sort_options);
    }
    
    // List multiple pages of replies to an unread conversation until a condition is no longer met.
    //
    // Response data: {}
    async list_replies_until(conversation_id, should_continue, sort_options) {
      return await this.#wrapper.list_until(`/conversations/${conversation_id}/replies`, should_continue, sort_options);
    }
    
    // Reply to an unread conversation
    //
    // Response data: {}
    async reply(conversation_id, message) {
      return await this.#wrapper.post(`/conversations/${conversation_id}/replies`, {
        message: message,
      });
    }
}
  
exports.ConversationsHelper = ConversationsHelper;
  