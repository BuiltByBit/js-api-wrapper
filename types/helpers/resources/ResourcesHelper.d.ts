/** A helper type for resource-related API endpoints. */
export class ResourcesHelper {
    constructor(wrapper: any);
    /** List a page of public resources.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    list(sort: SortOptions): Array<object>;
    /** List a page of owned resources.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listOwned(sort: SortOptions): Array<object>;
    /** List all pages of owned resources.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listOwnedAll(sort: SortOptions): Array<object>;
    /** List multiple pages of owned resources until a condition is no longer met.
     *
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listOwnedUntil(shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** List a page of collaborated resources.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listCollaborated(sort: SortOptions): Array<object>;
    /** List all pages of collaborated resources.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listCollaboratedAll(sort: SortOptions): Array<object>;
    /** List multiple pages of collaborated resources until a condition is no longer met.
     *
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listCollaboratedUntil(shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Fetch detailed information about a resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @return {object} A raw data object.
     */
    fetch(resourceId: number): object;
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