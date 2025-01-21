// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { SortOptions } = require("../../SortOptions");

/**
 * @typedef {object} Download
 * @property {number} download_id
 * @property {number} version_id
 * @property {number} downloader_id
 * @property {number} download_date
 */

/** A helper type for resource download-related API endpoints. */
class DownloadsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of downloads for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/downloads`, sort);
    }
    
    /** List all pages of downloads for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/downloads`, () => true, sort);
    }
    
    /** List multiple pages of downloads for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Download):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/downloads`, shouldContinue, sort);
    }
    
    /** List a page of downloads by member for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listByMember(resourceId, memberId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/downloads/members/${memberId}`, sort);
    }
    
    /** List all pages of downloads by member for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listByMemberAll(resourceId, memberId, sort) {
        let endpoint = `/resources/${resourceId}/downloads/members/${memberId}`;
        return await this.#wrapper.http().listUntil(endpoint, () => true, sort);
    }
    
    /** List multiple pages of downloads by member for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {function(Download):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listByMemberUntil(resourceId, memberId, shouldContinue, sort) {
        let endpoint = `/resources/${resourceId}/downloads/members/${memberId}`;
        return await this.#wrapper.http().listUntil(endpoint, shouldContinue, sort);
    }
    
    /** List a page of downloads by version for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listByVersion(resourceId, versionId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/downloads/versions/${versionId}`, sort);
    }
    
    /** List all pages of downloads by version for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listByVersionAll(resourceId, versionId, sort) {
        let endpoint = `/resources/${resourceId}/downloads/versions/${versionId}`;
        return await this.#wrapper.http().listUntil(endpoint, () => true, sort);
    }
    
    /** List multiple pages of downloads by version for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * @param {function(Download):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<Download>} An array of raw data objects.
     */
    async listByVersionUntil(resourceId, versionId, shouldContinue, sort) {
        let endpoint = `/resources/${resourceId}/downloads/versions/${versionId}`;
        return await this.#wrapper.http().listUntil(endpoint, shouldContinue, sort);
    }
}

exports.DownloadsHelper = DownloadsHelper;