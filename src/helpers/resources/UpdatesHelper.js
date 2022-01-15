// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class UpdatesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of updates for a given resource.
    //
    // Response data: {}
    async list(resourceId, sortOptions) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/updates`, sortOptions);
    }
    
    // List all pages of updates for a given resource.
    //
    // Response data: {}
    async listAll(resourceId, sortOptions) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/updates`, () => true, sortOptions);
    }
    
    // List multiple pages of updates for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(resourceId, shouldContinue, sortOptions) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/updates`, shouldContinue, sortOptions);
    }
    
    // Fetch the latest update for a given resource.
    //
    // Response data: {}
    async latest(resourceId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/updates/latest`);
    }
    
    // Fetch an update for a given resource.
    //
    // Response data: {}
    async fetch(resourceId, updateId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/updates/${updateId}`);
    }
    
    // Delete an update for a given resource.
    async delete(resourceId, updateId) {
        return await this.#wrapper.http().delete(`/resources/${resourceId}/updates/${updateId}`);
    }
}

exports.UpdatesHelper = UpdatesHelper;