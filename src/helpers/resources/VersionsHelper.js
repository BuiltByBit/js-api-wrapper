// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class VersionsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of versions for a given resource.
    //
    // Response data: {}
    async list(resourceId, sortOptions) {
        return await this.#wrapper.get(`/resources/${resourceId}/versions`, sortOptions);
    }
    
    // List all pages of versions for a given resource.
    //
    // Response data: {}
    async listAll(resourceId, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/versions`, () => true, sortOptions);
    }
    
    // List multiple pages of versions for a given resource until a condition is no longer
    // met.
    //
    // Response data: {}
    async listUntil(resourceId, shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/versions`, shouldContinue, sortOptions);
    }
    
    // Fetch the latest version for a given resource.
    //
    // Response data: {}
    async latest(resourceId) {
        return await this.#wrapper.get(`/resources/${resourceId}/versions/latest`);
    }
    
    // Fetch a version for a given resource.
    //
    // Response data: {}
    async fetch(resourceId, versionId) {
        return await this.#wrapper.get(`/resources/${resourceId}/versions/${versionId}`);
    }
    
    // Delete a version for a given resource.
    async delete(resourceId, versionId) {
        return await this.#wrapper.delete(`/resources/${resourceId}/versions/${versionId}`);
    }
}

exports.VersionsHelper = VersionsHelper;