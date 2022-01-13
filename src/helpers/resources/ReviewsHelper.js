// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ReviewsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of reviews for a given resource.
    //
    // Response data: {}
    async list(resourceId, sortOptions) {
        return await this.#wrapper.get(`/resources/${resourceId}/reviews`, sortOptions);
    }
    
    // List all pages of reviews for a given resource.
    //
    // Response data: {}
    async listAll(resourceId, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/reviews`, () => true, sortOptions);
    }
    
    // List multiple pages of reviews for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(resourceId, shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/reviews`, shouldContinue, sortOptions);
    }
    
    // Fetch a resource review by a member for a given resource.
    //
    // Response data: {}
    async fetch(resourceId, memberId) {
        return await this.#wrapper.get(`/resources/${resourceId}/reviews/members/${memberId}`);
    }
    
    // Respond to a review for a given resource.
    async respond(resourceId, reviewId, response) {
        return await this.#wrapper.patch(`/resources/${resourceId}/reviews/${reviewId}`, { response });
    }
}

exports.ReviewsHelper = ReviewsHelper;