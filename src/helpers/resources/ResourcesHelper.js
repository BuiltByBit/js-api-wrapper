// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { DownloadsHelper } = require("./DownloadsHelper.js");
const { LicensesHelper } = require("./LicensesHelper.js");
const { PurchasesHelper } = require("./PurchasesHelper.js");
const { ReviewsHelper } = require("./ReviewsHelper.js");
const { UpdatesHelper } = require("./UpdatesHelper.js");
const { VersionsHelper } = require("./VersionsHelper.js");

class ResourcesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of public resources.
    //
    // Response data: {}
    async list(sortOptions) {
        return await this.#wrapper.get("/resources", sortOptions);
    }
    
    // No helper functions for `list_until` have been provided here for listing public resources. Whilst this breaks
    // consistency with the rest of this wrapper, doing so would greatly encourage the undue scraping of our public
    // resource list.
    
    // List a page of owned resources.
    //
    // Response data: {}
    async listOwned(sortOptions) {
        return await this.#wrapper.get("/resources/owned", sortOptions);
    }
    
    // List all pages of owned resources.
    //
    // Response data: {}
    async listOwnedAll(sortOptions) {
        return await this.#wrapper.listUntil("/resources/owned", () => true, sortOptions);
    }
    
    // List multiple pages of owned resources until a condition is no longer met.
    //
    // Response data: {}
    async listOwnedUntil(shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil("/resources/owned", shouldContinue, sortOptions);
    }
    
    // List a page of collaborated resources.
    //
    // Response data: {}
    async listCollaborated(sortOptions) {
        return await this.wrapper.get("/resources/collaborated", sortOptions);
    }
    
    // List all pages of collaborated resources.
    //
    // Response data: {}
    async listCollaboratedAll(sortOptions) {
        return await this.#wrapper.listUntil("/resources/collaborated", () => true, sortOptions);
    }
    
    // List multiple pages of collaborated resources until a condition is no longer met.
    //
    // Response data: {}
    async listCollaboratedUntil(shouldContinue, sortOptions) {
        return await this.#wrapper.listUntil("/resources/collaborated", shouldContinue, sortOptions);
    }
    
    // Fetch detailed information about a resource.
    //
    // Response data: {}
    async fetch(resourceId) {
        return await this.#wrapper.get(`/resources/${resourceId}`);
    }
    
    // Edit resource fields for a resource you own or collaborate on.
    async modify(resourceId, title, description, tagLine) {
        return await this.#wrapper.patch(`/resources/${resourceId}`, {
            title: title,
            description: description,
            tag_line: tagLine,
        });
    }

    downloads() {
        return new DownloadsHelper(this.#wrapper);
    }

    licenses() {
        return new LicensesHelper(this.#wrapper);
    }

    purchases() {
        return new PurchasesHelper(this.#wrapper);
    }

    reviews() {
        return new ReviewsHelper(this.#wrapper);
    }

    updates() {
        return new UpdatesHelper(this.#wrapper);
    }

    versions() {
        return new VersionsHelper(this.#wrapper);
    }
}

exports.ResourcesHelper = ResourcesHelper;  