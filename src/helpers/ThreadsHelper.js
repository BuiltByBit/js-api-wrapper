// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ThreadsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of threads you own or collaborate on.
    //
    // Response data: {}
    async list(sortOptions) {
        return await this.#wrapper.get("/threads", sortOptions);
    }
    
    // List all pages of threads you own or collaborate on.
    //
    // Response data: {}
    async listAll(sortOptions) {
        return await this.#wrapper.listUntil("/threads", () => true, sortOptions);
    }
    
    // List multiple pages of threads you own or collaborate on until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil("/threads", shouldContinue, sortOptions);
    }
    
    // Fetch information about a thread you own or collaborate on.
    //
    // Response data: {}
    async fetch(threadId) {
        return await this.#wrapper.get(`/threads/${threadId}`);
    }
    
    // List a page of replies for a thread you own or collaborate on.
    //
    // Response data: {}
    async listReplies(threadId, sortOptions) {
        return await this.#wrapper.get(`/threads/${threadId}/replies`, sortOptions);
    }
    
    // List all pages of replies for a thread you own or collaborate on.
    //
    // Response data: {}
    async listRepliesAll(threadId, sortOptions) {
        return await this.#wrapper.listUntil(`/threads/${threadId}/replies`, () => true, sortOptions);
    }
    
    // List multiple pages of replies for a thread you own or collaborate on until a condition is no longer met.
    //
    // Response data: {}
    async listRepliesUntil(threadId, shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil(`/threads/${threadId}/replies`, shouldContinue, sortOptions);
    }
    
    // Reply to a thread you own or collaborate on.
    async reply(threadId, message) {
        return await this.#wrapper.post(`/threads/${threadId}/replies`, { message });
    }
}

exports.ThreadsHelper = ThreadsHelper;