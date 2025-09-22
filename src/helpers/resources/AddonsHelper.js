// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { SortOptions } = require("../../SortOptions");

/**
 * @typedef {object} AddonPurchase
 * @property {number} purchase_id
 * @property {number} purchaser_id
 * @property {boolean} renewal
 * @property {string} status
 * @property {number} price
 * @property {string} currency
 * @property {number} purchase_date
 * @property {number} validation_date
 */

/**
 * @typedef {object} AddonLicense
 * @property {number} license_id
 * @property {number} purchase_id
 * @property {number} issued_to
 * @property {number} issued_by
 * @property {number} issued_at
 * @property {boolean} active
 */

/** A helper type for resource addon-related API endpoints. */
class AddonsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of purchases for a given addon.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    async listPurchases(addonId, sort) {
        return await this.#wrapper.http().get(`/addons/${addonId}/purchases/`, sort);
    }
    
    /** List all pages of purchases for a given addon.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    async listAllPurchases(addonId, sort) {
        return await this.#wrapper.http().listUntil(`/addons/${addonId}/purchases/`, () => true, sort);
    }
    
    /** List multiple pages of purchases for a given addon until a condition is no longer met.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {function(AddonPurchase):boolean} shouldContinue A fn which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    async listPurchasesUntil(addonId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/addons/${addonId}/purchases/`, shouldContinue, sort);
    }
    
    /** List a page of purchases by member for a given addon.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    async listPurchasesByMember(addonId, memberId, sort) {
        return await this.#wrapper.http().get(`/addons/${addonId}/purchases/member/${memberId}/`, sort);
    }

    /** List a page of licenses for a given addon.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    async listLicenses(addonId, sort) {
        return await this.#wrapper.http().get(`/addons/${addonId}/licenses/`, sort);
    }
    
    /** List all pages of licenses for a given addon.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    async listAllLicenses(addonId, sort) {
        return await this.#wrapper.http().listUntil(`/addons/${addonId}/licenses/`, () => true, sort);
    }
    
    /** List multiple pages of licenses for a given addon until a condition is no longer met.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {function(AddonLicense):boolean} shouldContinue A fn which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    async listLicensesUntil(addonId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/addons/${addonId}/licenses/`, shouldContinue, sort);
    }
    
    /** List a page of licenses by member for a given addon.
     * 
     * @param {number} addonId The identifier of the addon.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    async listLicensesByMember(addonId, memberId, sort) {
        return await this.#wrapper.http().get(`/addons/${addonId}/licenses/member/${memberId}/`, sort);
    }
}

exports.AddonsHelper = AddonsHelper;