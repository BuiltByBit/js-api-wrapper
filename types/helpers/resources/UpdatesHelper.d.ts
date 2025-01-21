export type Update = {
    update_id: number;
    title: string;
    message: string;
    update_date: number;
};
/**
 * @typedef {object} Update
 * @property {number} update_id
 * @property {string} title
 * @property {string} message
 * @property {number} update_date
 */
/** A helper type for resource update-related API endpoints. */
export class UpdatesHelper {
    constructor(wrapper: any);
    /** List a page of updates for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Update>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions | undefined): Array<Update>;
    /** List all pages of updates for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Update>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions | undefined): Array<Update>;
    /** List multiple pages of updates for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Update):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Update>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: Update) => boolean, sort: SortOptions | undefined): Array<Update>;
    /** Fetch the latest update for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     *
     * @return {Update} A raw data object.
     */
    latest(resourceId: number): Update;
    /** Fetch an update for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} updateId The identifier of the update.
     *
     * @return {Update} A raw data object.
     */
    fetch(resourceId: number, updateId: number): Update;
    /** Delete an update for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} updateId The identifier of the update.
     */
    delete(resourceId: number, updateId: number): Promise<any>;
    #private;
}
import { SortOptions } from "../../SortOptions";
//# sourceMappingURL=UpdatesHelper.d.ts.map