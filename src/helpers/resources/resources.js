// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class ResourcesHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // List a page of public resources.
    //
    // Response data: {}
    async list(sort_options) {
      return await this.wrapper.get("/resources", sort_options);
    }
    
    // No helper functions for `list_until` have been provided here for listing public resources. Whilst this breaks
    // consistency with the rest of this wrapper, doing so would greatly encourage the undue scraping of our public
    // resource list.
    
    // List a page of owned resources.
    //
    // Response data: {}
    async list_owned(sort_options) {
      return await this.wrapper.get("/resources/owned", sort_options);
    }
    
    // List all pages of owned resources.
    //
    // Response data: {}
    async list_owned_all(sort_options) {
      return await this.wrapper.list_until("/resources/owned", () => true, sort_options);
    }
    
    // List multiple pages of owned resources until a condition is no longer met.
    //
    // Response data: {}
    async list_owned_until(should_continue, sort_options) {
      return await this.wrapper.list_until("/resources/owned", should_continue, sort_options);
    }
    
    // List a page of collaborated resources.
    //
    // Response data: {}
    async list_collaborated(sort_options) {
      return await this.wrapper.get("/resources/collaborated", sort_options);
    }
    
    // List all pages of collaborated resources.
    //
    // Response data: {}
    async list_collaborated_all(sort_options) {
      return await this.wrapper.list_until("/resources/collaborated", () => true, sort_options);
    }
    
    // List multiple pages of collaborated resources until a condition is no longer met.
    //
    // Response data: {}
    async list_collaborated_until(should_continue, sort_options) {
      return await this.wrapper.list_until("/resources/collaborated", should_continue, sort_options);
    }
    
    // Fetch detailed information about a resource.
    //
    // Response data: {}
    async fetch(resource_id) {
      return await this.wrapper.get(`/resources/${resource_id}`);
    }
    
    // Edit resource fields for a resource you own or collaborate on.
    async modify(resource_id, title, description, tag_line) {
      return await this.wrapper.patch(`/resources/${resource_id}`, {
        title: title,
        description: description,
        tag_line: tag_line,
      });
    }
}

exports.ResourcesHelper = ResourcesHelper;  