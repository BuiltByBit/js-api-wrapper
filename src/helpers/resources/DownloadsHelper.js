// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class DownloadsHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of downloads for a given resource.
    //
    // Response data: {}
    async list(resourceId, sortOptions) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/downloads`, sortOptions);
    }
    
    // List all pages of downloads for a given resource.
    //
    // Response data: {}
    async listAll(resourceId, sortOptions) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/downloads`, () => true, sortOptions);
    }
    
    // List multiple pages of downloads for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(resourceId, shouldContinue, sortOptions) {
        return await this.#wrapper.http().listUntil(`/resources/${resourceId}/downloads`, shouldContinue, sortOptions);
    }
    
    // List a page of downloads by member for a given resource.
    //
    // Response data: {}
    async listByMember(resourceId, memberId, sortOptions) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/downloads/members/${memberId}`, sortOptions);
    }
    
    // List all pages of downloads by member for a given resource.
    //
    // Response data: {}
    async listByMemberAll(resource_id, member_id, sort_options) {
        return await this.#wrapper.http().listUntil(
            `/resources/${resourceId}/downloads/members/${memberId}`,
            () => true,
            sortOptions
        );
    }
    
    // List multiple pages of downloads by member for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async listByMemberUntil(resourceId, memberId, shouldContinue, sortOptions) {
        return await this.#wrapper.http().listUntil(
            `/resources/${resourceId}/downloads/members/${memberId}`,
            shouldContinue,
            sortOptions
        );
    }
    
    // List a page of downloads by version for a given resource.
    //
    // Response data: {}
    async listByVersion(resourceId, versionId, sortOptions) {
        return await this.#wrapper.http().get(`/resources/${resourceId}/downloads/versions/${versionId}`, sortOptions);
    }
    
    // List all pages of downloads by version for a given resource.
    //
    // Response data: {}
    async listByVersionAll(resourceId, versionId, sortOptions) {
        return await this.#wrapper.http().listUntil(
            `/resources/${resourceId}/downloads/versions/${versionId}`,
            () => true,
            sortOptions
        );
    }
    
    // List multiple pages of downloads by version for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async listByVersionUntil(resourceId, versionId, shouldContinue, sortOptions) {
        return await this.#wrapper.http().listUntil(
            `/resources/${resourceId}/downloads/versions/${versionId}`,
            shouldContinue,
            sortOptions
        );
    }
}

exports.DownloadsHelper = DownloadsHelper;