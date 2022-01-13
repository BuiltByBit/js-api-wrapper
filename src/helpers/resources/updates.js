// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class UpdatesHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // List a page of updates for a given resource.
    //
    // Response data: {}
    async list(resource_id, sort_options) {
      return await this.wrapper.get(`/resources/${resource_id}/updates`, sort_options);
    }
    
    // List all pages of updates for a given resource.
    //
    // Response data: {}
    async list_all(resource_id, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/updates`, () => true, sort_options);
    }
    
    // List multiple pages of updates for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async list_until(resource_id, should_continue, sort_options) {
      return await this.wrapper.list_until(`/resources/${resource_id}/updates`, should_continue, sort_options);
    }
    
    // Fetch the latest update for a given resource.
    //
    // Response data: {}
    async latest(resource_id) {
      return await this.wrapper.get(`/resources/${resource_id}/updates/latest`);
    }
    
    // Fetch an update for a given resource.
    //
    // Response data: {}
    async fetch(resource_id, update_id) {
      return await this.wrapper.get(`/resources/${resource_id}/updates/${update_id}`);
    }
    
    // Delete an update for a given resource.
    async delete(resource_id, update_id) {
      return await this.wrapper.delete(`/resources/${resource_id}/updates/${update_id}`);
    }
}

exports.UpdatesHelper = UpdatesHelper;