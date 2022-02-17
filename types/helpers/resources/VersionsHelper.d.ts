/** A helper type for resource version-related API endpoints. */
export class VersionsHelper {
    constructor(wrapper: any);
    /** List a page of versions for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<object>;
    /** List all pages of versions for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of versions for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Fetch the latest version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     *
     * @return {object} A raw data object.
     */
    latest(resourceId: number): object;
    /** Fetch a version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     *
     * @return {object} A raw data object.
     */
    fetch(resourceId: number, versionId: number): object;
    /** Delete a version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     */
    delete(resourceId: number, versionId: number): Promise<any>;
    #private;
}
//# sourceMappingURL=VersionsHelper.d.ts.map