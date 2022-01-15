// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A helper type for resource review-related API endpoints. */
class ReviewsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of reviews for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async list(resourceId, sort) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/reviews`, sort);
    }
    
    /** List all pages of reviews for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listAll(resourceId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/reviews`, () => true, sort);
    }
    
    /** List multiple pages of reviews for a given resource until a condition is no longer met.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw data objects.
     */
    async listUntil(resourceId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/reviews`, shouldContinue, sort);
    }
    
    /** Fetch a resource review by a member for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * 
     * @return {object} A raw data object.
     */
    async fetch(resourceId, memberId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/reviews/members/${memberId}`);
    }
    
    /** Respond to a review for a given resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {number} reviewId The identifier of the review.
     * @param {string} response The content of the author response.
     */
    async respond(resourceId, reviewId, response) {
        return await this.#wrapper.http().patch(`/resources/${resourceId}/reviews/${reviewId}`, {response});
    }
}

exports.ReviewsHelper = ReviewsHelper;