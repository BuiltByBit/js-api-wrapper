// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A helper type for resource purchase-related API endpoints. */
class PurchasesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of purchases for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/purchases`, sort);
    }
    
    /** List all pages of purchases for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/purchases`, () => true, sort);
    }

    /** List multiple pages of purchases for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/purchases`, shouldContinue, sort);
    }
    
    /** Fetch a purchase for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaseId The identifier of the purchase.
     * 
     * @return {object} A raw data object.
     */
    async fetch(resourceId, purchaseId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/purchases/${purchaseId}`);
    }
}

exports.PurchasesHelper = PurchasesHelper;