// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A helper type for resource license-related API endpoints. */
class LicensesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of licenses for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {object} A raw data object.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/licenses`, sort);
    }
    
    /** List all pages of licenses for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {object} A raw data object.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/licenses`, () => true, sort);
    }

    /** List multiple pages of licenses for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {object} A raw data object.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/licenses`, shouldContinue, sort);
    }
    
    /** Issue a new permanent license for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaserId The identifier of the purchaser.
     * @param {boolean} active Whether or not the license should be active.
     * 
     * @return {number} The identifier of the newly-created license.
     */
    async issuePermanent(resourceId, purchaserId, active) {
        let body = {permanent: true, "purchaser_id": purchaserId, active};
        return await this.#wrapper.http().post(`/resources/${resourceId}/licenses`, body);
    }
    
    /** Issue a new temporay license for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaserId The identifier of the purchaser.
     * @param {number} purchaserId The identifier of the purchaser.
     * @param {number} startDate The UNIX timestamp of when the license should start.
     * @param {number} endDate The UNIX timestamp of when the license should end.
     * 
     * @return {number} The identifier of the newly-created license.
     */
    async issueTemporary(resourceId, purchaserId, startDate, endDate) {
        let body = {
            permanent: false,
            "purchaser_id": purchaserId,
            "start_date": startDate,
            "end_date": endDate
        };

        return await this.#wrapper.http().post(`/resources/${resourceId}/licenses`, body);
    }
    
    /** Fetch a license for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     * 
     * @return {object} A raw data object.
     */
    async fetch(resourceId, licenseId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/licenses/${licenseId}`);
    }
    
    /** Fetch a member's license for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {number} nonce The download's NONCE value, or undefined if using a Private token.
     * @param {number} timestamp The download's UNIX timestamp, or undefined if using a Private token.
     * 
     * @return {object} A raw data object.
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