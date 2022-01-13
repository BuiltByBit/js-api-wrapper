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
    async list(resourceId, sortOptions) {
        return await this.#wrapper.get(`/resources/${resourceId}/purchases`, sortOptions);
    }
    
    // List all pages of purchases for a given resource.
    //
    // Response data: {}
    async listAll(resourceId, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/purchases`, () => true, sortOptions);
    }
    
    // List multiple pages of purchases for a given resource until a condition is no longer
    // met.
    //
    // Response data: {}
    async listUntil(resourceId, shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/purchases`, shouldContinue, sortOptions);
    }
    
    // Fetch a purchase for a given resource.
    //
    // Response data: {}
    async fetch(resourceId, purchaseId) {
        return await this.#wrapper.get(`/resources/${resourceId}/purchases/${purchaseId}`);
    }
}

exports.PurchasesHelper = PurchasesHelper;