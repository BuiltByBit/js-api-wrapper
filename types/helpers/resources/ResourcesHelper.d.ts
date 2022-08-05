export type BasicResource = {
    resource_id: number;
    author_id: number;
    title: string;
    tag_line: string;
    price: number;
    currency: string;
};
export type Resource = {
    resource_id: number;
    author_id: number;
    title: string;
    tag_line: string;
    description: string;
    release_date: number;
    last_update_date: number;
    category_title: string;
    current_version_id: number;
    price: number;
    currency: string;
    purchase_count: number;
    download_count: number;
    review_count: number;
    review_average: number;
};
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
export class ResourcesHelper {
    constructor(wrapper: any);
    /** List a page of public resources.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    list(sort: SortOptions | undefined): Array<BasicResource>;
    /** List a page of owned resources.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listOwned(sort: SortOptions | undefined): Array<BasicResource>;
    /** List all pages of owned resources.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listOwnedAll(sort: SortOptions | undefined): Array<BasicResource>;
    /** List multiple pages of owned resources until a condition is no longer met.
     *
     * @param {function(BasicResource):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listOwnedUntil(shouldContinue: (arg0: BasicResource) => boolean, sort: SortOptions | undefined): Array<BasicResource>;
    /** List a page of collaborated resources.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listCollaborated(sort: SortOptions | undefined): Array<BasicResource>;
    /** List all pages of collaborated resources.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listCollaboratedAll(sort: SortOptions | undefined): Array<BasicResource>;
    /** List multiple pages of collaborated resources until a condition is no longer met.
     *
     * @param {function(BasicResource):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listCollaboratedUntil(shouldContinue: (arg0: BasicResource) => boolean, sort: SortOptions | undefined): Array<BasicResource>;
    /** List a page of resources by an author.
     *
     * @param {number} authorId The identifier of the resource author.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listByAuthor(authorId: number, sort: SortOptions | undefined): Array<BasicResource>;
    /** List all pages of resources by an author.
     *
     * @param {number} authorId The identifier of the resource author.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listByAuthorAll(authorId: number, sort: SortOptions | undefined): Array<BasicResource>;
    /** List multiple pages of resources by an author until a condition is no longer met.
     *
     * @param {number} authorId The identifier of the resource author.
     * @param {function(BasicResource):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<BasicResource>} An array of raw data objects.
     */
    listByAuthorUntil(authorId: number, shouldContinue: (arg0: BasicResource) => boolean, sort: SortOptions | undefined): Array<BasicResource>;
    /** Fetch detailed information about a resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @return {Resource} A raw data object.
     */
    fetch(resourceId: number): Resource;
    /** Edit resource fields for a resource you own or collaborate on.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {string} title The updated content of the title, or undefined.
     * @param {string} description The updated content of the description, or undefined.
     * @param {string} tagLine The updated content of the tag line, or undefined.
     */
    modify(resourceId: number, title: string, description: string, tagLine: string): Promise<any>;
    /** Access download-related helper functions.
     *
     * @return {DownloadsHelper} A newly-constructed download helper instance.
     */
    downloads(): DownloadsHelper;
    /** Access license-related helper functions.
     *
     * @return {LicensesHelper} A newly-constructed license helper instance.
     */
    licenses(): LicensesHelper;
    /** Access purchase-related helper functions.
     *
     * @return {PurchasesHelper} A newly-constructed purchase helper instance.
     */
    purchases(): PurchasesHelper;
    /** Access review-related helper functions.
     *
     * @return {ReviewsHelper} A newly-constructed review helper instance.
     */
    reviews(): ReviewsHelper;
    /** Access update-related helper functions.
     *
     * @return {UpdatesHelper} A newly-constructed update helper instance.
     */
    updates(): UpdatesHelper;
    /** Access version-related helper functions.
     *
     * @return {VersionsHelper} A newly-constructed version helper instance.
     */
    versions(): VersionsHelper;
    #private;
}
import { DownloadsHelper } from "./DownloadsHelper.js";
import { LicensesHelper } from "./LicensesHelper.js";
import { PurchasesHelper } from "./PurchasesHelper.js";
import { ReviewsHelper } from "./ReviewsHelper.js";
import { UpdatesHelper } from "./UpdatesHelper.js";
import { VersionsHelper } from "./VersionsHelper.js";
//# sourceMappingURL=ResourcesHelper.d.ts.map