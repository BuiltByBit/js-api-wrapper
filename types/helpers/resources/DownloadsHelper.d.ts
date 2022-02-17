/** A helper type for resource download-related API endpoints. */
export class DownloadsHelper {
    constructor(wrapper: any);
    /** List a page of downloads for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<object>;
    /** List all pages of downloads for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of downloads for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** List a page of downloads by member for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listByMember(resourceId: number, memberId: number, sort: SortOptions): Array<object>;
    /** List all pages of downloads by member for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listByMemberAll(resourceId: number, memberId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of downloads by member for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listByMemberUntil(resourceId: number, memberId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** List a page of downloads by version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listByVersion(resourceId: number, versionId: number, sort: SortOptions): Array<object>;
    /** List all pages of downloads by version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listByVersionAll(resourceId: number, versionId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of downloads by version for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listByVersionUntil(resourceId: number, versionId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    #private;
}
//# sourceMappingURL=DownloadsHelper.d.ts.map