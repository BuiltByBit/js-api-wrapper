// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class VersionsHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // List a page of versions for a given resource.
    //
    // Response data: {}
    async list(resource_id, sort_options) {
      return await this.wrapper.get(`/resources/${resource_id}/versions`, sort_options);
    }
    
    // List all pages of versions for a given resource.
    //
    // Response data: {}
    async list_all(resource_id, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/versions`, () => true, sort_options);
    }
    
    // List multiple pages of versions for a given resource until a condition is no longer
    // met.
    //
    // Response data: {}
    async list_until(resource_id, should_continue, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/versions`, should_continue, sort_options);
    }
    
    // Fetch the latest version for a given resource.
    //
    // Response data: {}
    async latest(resource_id) {
      return await this.wrapper.get(`/resources/${resource_id}/versions/latest`);
    }
    
    // Fetch a version for a given resource.
    //
    // Response data: {}
    async fetch(resource_id, version_id) {
      return await this.wrapper.get(`/resources/${resource_id}/versions/${version_id}`);
    }
    
    // Delete a version for a given resource.
    async delete(resource_id, version_id) {
      return await this.wrapper.delete(`/resources/${resource_id}/versions/${version_id}`);
    }
}

exports.VersionsHelper = VersionsHelper;