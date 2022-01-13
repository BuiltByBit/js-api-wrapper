// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ThreadsHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // List a page of threads you own or collaborate on.
    //
    // Response data: {}
    async list(sort_options) {
      return await this.wrapper.get("/threads", sort_options);
    }
    
    // List all pages of threads you own or collaborate on.
    //
    // Response data: {}
    async list_all(sort_options) {
      return await this.wrapper.list_until("/threads", () => true, sort_options);
    }
    
    // List multiple pages of threads you own or collaborate on until a condition is no longer met.
    //
    // Response data: {}
    async list_until(should_continue, sort_options) {
      return await this.wrapper.list_until("/threads", should_continue, sort_options);
    }
    
    // Fetch information about a thread you own or collaborate on.
    //
    // Response data: {}
    async fetch(thread_id) {
      return await this.wrapper.get(`/threads/${thread_id}`);
    }
    
    // List a page of replies for a thread you own or collaborate on.
    //
    // Response data: {}
    async list_replies(thread_id, sort_options) {
      return await this.wrapper.get(`/threads/${thread_id}/replies`, sort_options);
    }
    
    // List all pages of replies for a thread you own or collaborate on.
    //
    // Response data: {}
    async list_replies_all(thread_id, sort_options) {
      return await this.wrapper.list_until(`/threads/${thread_id}/replies`, () => true, sort_options);
    }
    
    // List multiple pages of replies for a thread you own or collaborate on until a condition is no longer met.
    //
    // Response data: {}
    async list_replies_until(thread_id, should_continue, sort_options) {
      return await this.wrapper.list_until(`/threads/${thread_id}/replies`, should_continue, sort_options);
    }
    
    // Reply to a thread you own or collaborate on.
    async reply(thread_id, message) {
      return await this.wrapper.post(`/threads/${thread_id}/replies`, { message });
    }
}
  
exports.ThreadsHelper = ThreadsHelper;
  