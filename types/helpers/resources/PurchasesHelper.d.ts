/** A helper type for resource purchase-related API endpoints. */
export class PurchasesHelper {
    constructor(wrapper: any);
    /** List a page of purchases for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<object>;
    /** List all pages of purchases for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of purchases for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Fetch a purchase for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaseId The identifier of the purchase.
     *
     * @return {object} A raw data object.
     */
    fetch(resourceId: number, purchaseId: number): object;
    #private;
}
//# sourceMappingURL=PurchasesHelper.d.ts.map