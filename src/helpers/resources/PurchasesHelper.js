// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class PurchasesHelper {
    #wrapper;
    
    constructor(wrapper) {
      this.#wrapper = wrapper;
    }
    
    // List a page of purchases for a given resource.
    //
    // Response data: {}
    async list(resource_id, sort_options) {
      return await this.#wrapper.get(`/resources/${resource_id}/purchases`, sort_options);
    }
    
    // List all pages of purchases for a given resource.
    //
    // Response data: {}
    async list_all(resource_id, sort_options) {
      return await this.#wrapper.list_until(`/resources/${resource_id}/purchases`, () => true, sort_options);
    }
    
    // List multiple pages of purchases for a given resource until a condition is no longer
    // met.
    //
    // Response data: {}
    async list_until(resource_id, should_continue, sort_options) {
      return await this.#wrapper.list_until(`/resources/${resource_id}/purchases`, should_continue, sort_options);
    }
    
    // Fetch a purchase for a given resource.
    //
    // Response data: {}
    async fetch(resource_id, purchase_id) {
      return await this.#wrapper.get(`/resources/${resource_id}/purchases/${purchase_id}`);
    }
}

exports.PurchasesHelper = PurchasesHelper;