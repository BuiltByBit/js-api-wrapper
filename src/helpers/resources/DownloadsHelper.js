// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class DownloadsHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // List a page of downloads for a given resource.
    //
    // Response data: {}
    async list(resource_id, sort_options) {
      return await this.wrapper.get(`/resources/${resource_id}/downloads`, sort_options);
    }
    
    // List all pages of downloads for a given resource.
    //
    // Response data: {}
    async list_all(resource_id, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/downloads`, () => true, sort_options);
    }
    
    // List multiple pages of downloads for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async list_until(resource_id, should_continue, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/downloads`, should_continue, sort_options);
    }
    
    // List a page of downloads by member for a given resource.
    //
    // Response data: {}
    async list_by_member(resource_id, member_id, sort_options) {
      return await this.wrapper.get(`/resources/${resource_id}/downloads/members/${member_id}`, sort_options);
    }
    
    // List all pages of downloads by member for a given resource.
    //
    // Response data: {}
    async list_by_member_all(resource_id, member_id, sort_options) {
      return await this.wrapper.list_until(
        `/resources/${resource_id}/downloads/members/${member_id}`,
        () => true,
        sort_options
      );
    }
    
    // List multiple pages of downloads by member for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async list_by_member_until(resource_id, member_id, should_continue, sort_options) {
      return await this.wrapper.list_until(
        `/resources/${resource_id}/downloads/members/${member_id}`,
        should_continue,
        sort_options
      );
    }
    
    // List a page of downloads by version for a given resource.
    //
    // Response data: {}
    async list_by_version(resource_id, version_id, sort_options) {
      return await this.wrapper.get(`/resources/${resource_id}/downloads/versions/${version_id}`, sort_options);
    }
    
    // List all pages of downloads by version for a given resource.
    //
    // Response data: {}
    async list_by_version_all(resource_id, version_id, sort_options) {
      return await this.wrapper.list_until(
        `/resources/${resource_id}/downloads/versions/${version_id}`,
        () => true,
        sort_options
      );
    }
    
    // List multiple pages of downloads by version for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async list_by_version_until(resource_id, version_id, should_continue, sort_options) {
      return await this.wrapper.list_until(
        `/resources/${resource_id}/downloads/versions/${version_id}`,
        should_continue,
        sort_options
      );
    }
}
  
exports.DownloadsHelper = DownloadsHelper;