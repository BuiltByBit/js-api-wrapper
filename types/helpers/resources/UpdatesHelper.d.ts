/** A helper type for resource update-related API endpoints. */
export class UpdatesHelper {
    constructor(wrapper: any);
    /** List a page of updates for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<object>;
    /** List all pages of updates for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of updates for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Fetch the latest update for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     *
     * @return {object} A raw data object.
     */
    latest(resourceId: number): object;
    /** Fetch an update for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} updateId The identifier of the update.
     *
     * @return {object} A raw data object.
     */
    fetch(resourceId: number, updateId: number): object;
    /** Delete an update for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} updateId The identifier of the update.
     */
    delete(resourceId: number, updateId: number): Promise<any>;
    #private;
}
//# sourceMappingURL=UpdatesHelper.d.ts.map