// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A helper type for resource version-related API endpoints. */
class VersionsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of versions for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/versions`, sort);
    }
    
    /** List all pages of versions for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/versions`, () => true, sort);
    }
    
    /** List multiple pages of versions for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/versions`, shouldContinue, sort);
    }
    
    /** Fetch the latest version for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * 
     * @return {object} A raw data object.
     */
    async latest(resourceId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/versions/latest`);
    }
    
    /** Fetch a version for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * 
     * @return {object} A raw data object.
     */
    async fetch(resourceId, versionId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/versions/${versionId}`);
    }
    
    /** Delete a version for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     */
    async delete(resourceId, versionId) {
        return await this.#wrapper.http().delete(`/resources/${resourceId}/versions/${versionId}`);
    }
}

exports.VersionsHelper = VersionsHelper;