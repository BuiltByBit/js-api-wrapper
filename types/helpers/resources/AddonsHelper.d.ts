export type AddonPurchase = {
    purchase_id: number;
    purchaser_id: number;
    renewal: boolean;
    status: string;
    price: number;
    currency: string;
    purchase_date: number;
    validation_date: number;
};
export type AddonLicense = {
    license_id: number;
    purchase_id: number;
    issued_to: number;
    issued_by: number;
    issued_at: number;
    active: boolean;
};
/**
 * @typedef {object} AddonPurchase
 * @property {number} purchase_id
 * @property {number} purchaser_id
 * @property {boolean} renewal
 * @property {string} status
 * @property {number} price
 * @property {string} currency
 * @property {number} purchase_date
 * @property {number} validation_date
 */
/**
 * @typedef {object} AddonLicense
 * @property {number} license_id
 * @property {number} purchase_id
 * @property {number} issued_to
 * @property {number} issued_by
 * @property {number} issued_at
 * @property {boolean} active
 */
/** A helper type for resource addon-related API endpoints. */
export class AddonsHelper {
    constructor(wrapper: any);
    /** List a page of purchases for a given addon.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    listPurchases(addonId: number, sort: SortOptions | undefined): Array<AddonPurchase>;
    /** List all pages of purchases for a given addon.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    listAllPurchases(addonId: number, sort: SortOptions | undefined): Array<AddonPurchase>;
    /** List multiple pages of purchases for a given addon until a condition is no longer met.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {function(AddonPurchase):boolean} shouldContinue A fn which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    listPurchasesUntil(addonId: number, shouldContinue: (arg0: AddonPurchase) => boolean, sort: SortOptions | undefined): Array<AddonPurchase>;
    /** List a page of purchases by member for a given addon.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonPurchase>} An array of raw data objects.
     */
    listPurchasesByMember(addonId: number, memberId: number, sort: SortOptions | undefined): Array<AddonPurchase>;
    /** List a page of licenses for a given addon.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    listLicenses(addonId: number, sort: SortOptions | undefined): Array<AddonLicense>;
    /** List all pages of licenses for a given addon.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    listAllLicenses(addonId: number, sort: SortOptions | undefined): Array<AddonLicense>;
    /** List multiple pages of licenses for a given addon until a condition is no longer met.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {function(AddonLicense):boolean} shouldContinue A fn which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    listLicensesUntil(addonId: number, shouldContinue: (arg0: AddonLicense) => boolean, sort: SortOptions | undefined): Array<AddonLicense>;
    /** List a page of licenses by member for a given addon.
     *
     * @param {number} addonId The identifier of the addon.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<AddonLicense>} An array of raw data objects.
     */
    listLicensesByMember(addonId: number, memberId: number, sort: SortOptions | undefined): Array<AddonLicense>;
    #private;
}
import { SortOptions } from "../../SortOptions";
//# sourceMappingURL=AddonsHelper.d.ts.map