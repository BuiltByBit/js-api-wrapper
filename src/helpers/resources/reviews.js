// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ReviewsHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // List a page of reviews for a given resource.
    //
    // Response data: {}
    async list(resource_id, sort_options) {
      return await this.wrapper.get(`/resources/${resource_id}/reviews`, sort_options);
    }
    
    // List all pages of reviews for a given resource.
    //
    // Response data: {}
    async list_all(resource_id, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/reviews`, () => true, sort_options);
    }
    
    // List multiple pages of reviews for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async list_until(resource_id, should_continue, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/reviews`, should_continue, sort_options);
    }
    
    // Fetch a resource review by a member for a given resource.
    //
    // Response data: {}
    async fetch(resource_id, member_id) {
      return await this.wrapper.get(`/resources/${resource_id}/reviews/members/${member_id}`);
    }
    
    // Respond to a review for a given resource.
    async respond(resource_id, review_id, response) {
      return await this.wrapper.patch(`/resources/${resource_id}/reviews/${review_id}`, { response });
    }
}

exports.ReviewsHelper = ReviewsHelper;