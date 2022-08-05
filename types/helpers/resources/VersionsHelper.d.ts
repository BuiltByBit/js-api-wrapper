export type Version = {
    version_id: number;
    update_id: number;
    name: string;
    release_date: number;
    download_count: number;
};
/**
 * @typedef {object} Version
 * @property {number} version_id
 * @property {number} update_id
 * @property {string} name
 * @property {number} release_date
 * @property {number} download_count
 */
/** A helper type for resource version-related API endpoints. */
export class VersionsHelper {
    constructor(wrapper: any);
    /** List a page of versions for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Version>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<Version>;
    /** List all pages of versions for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Version>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<Version>;
    /** List multiple pages of versions for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Version):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Version>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: Version) => boolean, sort: SortOptions): Array<Version>;
    /** Fetch the latest version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     *
     * @return {Version} A raw data object.
     */
    latest(resourceId: number): Version;
    /** Fetch a version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     *
     * @return {Version} A raw data object.
     */
    fetch(resourceId: number, versionId: number): Version;
    /** Delete a version for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} versionId The identifier of the version.
     */
    delete(resourceId: number, versionId: number): Promise<any>;
    #private;
}
//# sourceMappingURL=VersionsHelper.d.ts.map