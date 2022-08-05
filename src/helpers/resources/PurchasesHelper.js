// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

/**
 * @typedef {object} Purchase
 * @property {number} purchase_id
 * @property {number} purchaser_id
 * @property {number} license_id
 * @property {boolean} renewal
 * @property {string} status
 * @property {number} price
 * @property {string} currency
 * @property {number} purchase_date
 * @property {number} validation_date
 */

/** A helper type for resource purchase-related API endpoints. */
class PurchasesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of purchases for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Purchase>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/purchases`, sort);
    }
    
    /** List all pages of purchases for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Purchase>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/purchases`, () => true, sort);
    }

    /** List multiple pages of purchases for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Purchase):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Purchase>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/purchases`, shouldContinue, sort);
    }
    
    /** Fetch a purchase for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaseId The identifier of the purchase.
     * 
     * @return {Purchase} A raw data object.
     */
    async fetch(resourceId, purchaseId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/purchases/${purchaseId}`);
    }
}

exports.PurchasesHelper = PurchasesHelper;