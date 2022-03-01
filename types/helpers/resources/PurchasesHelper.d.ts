export type Purchase = {
    purchase_id: number;
    purchaser_id: number;
    license_id: number;
    renewal: boolean;
    status: string;
    price: number;
    currency: string;
    purchase_date: number;
    validation_date: number;
};
/**
 * @typedef {object} Purchase
 * @property {number} purchase_id
 * @property {number} purchaser_id
 * @property {number} license_id
 * @property {boolean} renewal
 * @property {string} status
 * @property {number} price
 * @property {string} currency
 * @property {number} purchase_date
 * @property {number} validation_date
 */
/** A helper type for resource purchase-related API endpoints. */
export class PurchasesHelper {
    constructor(wrapper: any);
    /** List a page of purchases for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Purchase>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<Purchase>;
    /** List all pages of purchases for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Purchase>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<Purchase>;
    /** List multiple pages of purchases for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Purchase):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Purchase>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: Purchase) => boolean, sort: SortOptions): Array<Purchase>;
    /** Fetch a purchase for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaseId The identifier of the purchase.
     *
     * @return {Purchase} A raw data object.
     */
    fetch(resourceId: number, purchaseId: number): Purchase;
    #private;
}
//# sourceMappingURL=PurchasesHelper.d.ts.map