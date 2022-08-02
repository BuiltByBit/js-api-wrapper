// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

/**
 * @typedef {object} Update
 * @property {number} update_id
 * @property {string} title
 * @property {string} message
 * @property {number} update_date
 */

/** A helper type for resource update-related API endpoints. */
class UpdatesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }

    /** List a page of updates for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<Update>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/updates`, sort);
    }
    
    /** List all pages of updates for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<Update>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/updates`, () => true, sort);
    }
    
    /** List multiple pages of updates for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Update):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<Update>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/updates`, shouldContinue, sort);
    }
    
    /** Fetch the latest update for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * 
     * @return {Update} A raw data object.
     */
    async latest(resourceId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/updates/latest`);
    }
    
    /** Fetch an update for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} updateId The identifier of the update.
     * 
     * @return {Update} A raw data object.
     */
    async fetch(resourceId, updateId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/updates/${updateId}`);
    }
    
    /** Delete an update for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} updateId The identifier of the update.
     */
    async delete(resourceId, updateId) {
        return await this.#wrapper.http().delete(`/resources/${resourceId}/updates/${updateId}`);
    }
}

exports.UpdatesHelper = UpdatesHelper;