// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { DownloadsHelper } = require("./DownloadsHelper.js");
const { LicensesHelper } = require("./LicensesHelper.js");
const { PurchasesHelper } = require("./PurchasesHelper.js");
const { ReviewsHelper } = require("./ReviewsHelper.js");
const { UpdatesHelper } = require("./UpdatesHelper.js");
const { VersionsHelper } = require("./VersionsHelper.js");

const { SortOptions } = require("../../SortOptions");

/**
 * @typedef {object} BasicResource
 * @property {number} resource_id
 * @property {number} author_id
 * @property {string} title
 * @property {string} tag_line
 * @property {number} price
 * @property {string} currency
 */

/**
 * @typedef {object} Resource
 * @property {number} resource_id
 * @property {number} author_id
 * @property {string} title
 * @property {string} tag_line
 * @property {string} description
 * @property {number} release_date
 * @property {number} last_update_date
 * @property {string} category_title
 * @property {number} current_version_id
 * @property {number} price
 * @property {string} currency
 * @property {number} purchase_count
 * @property {number} download_count
 * @property {number} review_count
 * @property {number} review_average
 */

/** A helper type for resource-related API endpoints. */
class ResourcesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    /** List a page of public resources.
     * 
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async list(sort) {
        return await this.#wrapper.http().get("/resources", sort);
    }
    
    // No helper functions for `list_until` have been provided here for listing public resources. Whilst this breaks
    // consistency with the rest of this wrapper, doing so would greatly encourage the undue scraping of our public
    // resource list.
    
    /** List a page of owned resources.
     * 
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listOwned(sort) {
        return await this.#wrapper.http().get("/resources/owned", sort);
    }
    
    /** List all pages of owned resources.
     * 
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listOwnedAll(sort) {
        return await this.#wrapper.http().listUntil("/resources/owned", () => true, sort);
    }
    
    /** List multiple pages of owned resources until a condition is no longer met.
     * 
     * @param {function(BasicResource):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listOwnedUntil(shouldContinue, sort) {
        return await this.#wrapper.http().listUntil("/resources/owned", shouldContinue, sort);
    }
    
    /** List a page of collaborated resources.
     * 
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listCollaborated(sort) {
        return await this.#wrapper.http().get("/resources/collaborated", sort);
    }
    
    /** List all pages of collaborated resources.
     * 
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listCollaboratedAll(sort) {
        return await this.#wrapper.http().listUntil("/resources/collaborated", () => true, sort);
    }
    
    /** List multiple pages of collaborated resources until a condition is no longer met.
     * 
     * @param {function(BasicResource):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listCollaboratedUntil(shouldContinue, sort) {
        return await this.#wrapper.http().listUntil("/resources/collaborated", shouldContinue, sort);
    }
    
    /** List a page of resources by an author.
     * 
     * @param {number} authorId The identifier of the resource author.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listByAuthor(authorId, sort) {
        return await this.#wrapper.http().get(`/resources/authors/${authorId}`, sort);
    }
    
    /** List all pages of resources by an author.
     * 
     * @param {number} authorId The identifier of the resource author.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listByAuthorAll(authorId, sort) {
        return await this.#wrapper.http().listUntil(`/resources/authors/${authorId}`, () => true, sort);
    }
    
    /** List multiple pages of resources by an author until a condition is no longer met.
     * 
     * @param {number} authorId The identifier of the resource author.
     * @param {function(BasicResource):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * 
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    async listByAuthorUntil(authorId, shouldContinue, sort) {
        return await this.#wrapper.http().listUntil(`/resources/authors/${authorId}`, shouldContinue, sort);
    }

    /** Fetch detailed information about a resource.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @return {Resource} A raw data object.
     */
    async fetch(resourceId) {
        return await this.#wrapper.http().get(`/resources/${resourceId}`);
    }
    
    /** Edit resource fields for a resource you own or collaborate on.
     * 
     * @param {number} resourceId The identifier of the resource.
     * @param {string} title The updated content of the title, or undefined.
     * @param {string} description The updated content of the description, or undefined.
     * @param {string} tagLine The updated content of the tag line, or undefined.
     */
    async modify(resourceId, title, description, tagLine) {
        let body = {title: title, description: description, "tag_line": tagLine};
        return await this.#wrapper.http().patch(`/resources/${resourceId}`, body);
    }

    /** Access download-related helper functions.
     * 
     * @return {DownloadsHelper} A newly-constructed download helper instance.
     */
    downloads() {
        return new DownloadsHelper(this.#wrapper);
    }

    /** Access license-related helper functions.
     * 
     * @return {LicensesHelper} A newly-constructed license helper instance.
     */
    licenses() {
        return new LicensesHelper(this.#wrapper);
    }

    /** Access purchase-related helper functions.
     * 
     * @return {PurchasesHelper} A newly-constructed purchase helper instance.
     */
    purchases() {
        return new PurchasesHelper(this.#wrapper);
    }

    /** Access review-related helper functions.
     * 
     * @return {ReviewsHelper} A newly-constructed review helper instance.
     */
    reviews() {
        return new ReviewsHelper(this.#wrapper);
    }

    /** Access update-related helper functions.
     * 
     * @return {UpdatesHelper} A newly-constructed update helper instance.
     */
    updates() {
        return new UpdatesHelper(this.#wrapper);
    }

    /** Access version-related helper functions.
     * 
     * @return {VersionsHelper} A newly-constructed version helper instance.
     */
    versions() {
        return new VersionsHelper(this.#wrapper);
    }
}

exports.ResourcesHelper = ResourcesHelper;  