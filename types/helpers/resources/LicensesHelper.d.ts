export type License = {
    license_id: number;
    purchaser_id: number;
    validated: boolean;
    permanent: boolean;
    active: boolean;
    start_date: number;
    end_date: number;
    previous_end_date: number;
};
/**
 * @typedef {object} License
 * @property {number} license_id
 * @property {number} purchaser_id
 * @property {boolean} validated
 * @property {boolean} permanent
 * @property {boolean} active
 * @property {number} start_date
 * @property {number} end_date
 * @property {number} previous_end_date
 */
/** A helper type for resource license-related API endpoints. */
export class LicensesHelper {
    constructor(wrapper: any);
    /** List a page of licenses for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<License>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<License>;
    /** List all pages of licenses for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<License>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<License>;
    /** List multiple pages of licenses for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(License):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<License>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: License) => boolean, sort: SortOptions): Array<License>;
    /** Issue a new permanent license for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaserId The identifier of the purchaser.
     * @param {boolean} active Whether or not the license should be active.
     *
     * @return {number} The identifier of the newly-created license.
     */
    issuePermanent(resourceId: number, purchaserId: number, active: boolean): number;
    /** Issue a new temporay license for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} purchaserId The identifier of the purchaser.
     * @param {number} startDate The UNIX timestamp of when the license should start.
     * @param {number} endDate The UNIX timestamp of when the license should end.
     *
     * @return {number} The identifier of the newly-created license.
     */
    issueTemporary(resourceId: number, purchaserId: number, startDate: number, endDate: number): number;
    /** Fetch a license for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     *
     * @return {License} A raw data object.
     */
    fetch(resourceId: number, licenseId: number): License;
    /** Fetch a member's license for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {number} nonce The download's NONCE value, or undefined if using a Private token.
     * @param {number} timestamp The download's UNIX timestamp, or undefined if using a Private token.
     *
     * @return {License} A raw data object.
     */
    fetchMember(resourceId: number, memberId: number, nonce: number, timestamp: number): License;
    /** Modify a permanent license (and convert to permanent if currently temporary).
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     * @param {boolean} active Whether or not the license should be active.
     */
    modifyPermanent(resourceId: number, licenseId: number, active: boolean): Promise<any>;
    /** Modify a temporary license (and convert to temporary if currently permanent).
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} licenseId The identifier of the license.
     * @param {number} startDate The UNIX timestamp of when the license should start.
     * @param {number} endDate The UNIX timestamp of when the license should end.
     */
    modifyTemporary(resourceId: number, licenseId: number, startDate: number, endDate: number): Promise<any>;
    #private;
}
//# sourceMappingURL=LicensesHelper.d.ts.map