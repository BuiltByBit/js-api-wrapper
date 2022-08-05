// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

/**
 * @typedef {object} License
 * @property {number} license_id
 * @property {number} purchaser_id
 * @property {boolean} validated
 * @property {boolean} permanent
 * @property {boolean} active
 * @property {number} start_date
 * @property {number} end_date
 * @property {number} previous_end_date
 */

/** A helper type for resource license-related API endpoints. */
class LicensesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of licenses for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<License>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/licenses`, sort);
    }
    
    /** List all pages of licenses for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<License>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/licenses`, () => true, sort);
    }

    /** List multiple pages of licenses for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(License):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<License>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/licenses`, shouldContinue, sort);
    }
    
    /** Fetch a license for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     * 
     * @return {License} A raw data object.
     */
    async fetch(resourceId, licenseId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/licenses/${licenseId}`);
    }
    
    /** Fetch a member's license for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {number | undefined} nonce The download's NONCE value, or undefined if using a Private token.
     * @param {number | undefined} timestamp The download's UNIX timestamp, or undefined if using a Private token.
     * 
     * @return {License} A raw data object.
     */
    async fetchMember(resourceId, memberId, nonce, timestamp) {
        let endpoint = `/resources/${resourceId}/licenses/members/${memberId}`;
        if (nonce && timestamp) endpoint += `?nonce=${nonce}&timestamp=${timestamp}`;

        return await this.#wrapper.http().get(endpoint);
    }
    
    /** Modify a permanent license (and convert to permanent if currently temporary).
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     * @param {boolean} active Whether or not the license should be active.
     */
    async modifyPermanent(resourceId, licenseId, active) {
        let body = {permanent: true, active};
        return await this.#wrapper.http().patch(`/resources/${resourceId}/licenses/${licenseId}`, body);
    }
    
    /** Modify a temporary license (and convert to temporary if currently permanent).
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     * @param {number} startDate The UNIX timestamp of when the license should start.
     * @param {number} endDate The UNIX timestamp of when the license should end.
     */
    async modifyTemporary(resourceId, licenseId, startDate, endDate) {
        let body = {permanent: false, "start_date": startDate, "end_date": endDate};
        return await this.#wrapper.http().patch(`/resources/${resourceId}/licenses/${licenseId}`, body);
    }
}

exports.LicensesHelper = LicensesHelper;