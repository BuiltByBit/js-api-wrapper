/** A helper type for alert-related API endpoints. */
export class AlertsHelper {
    constructor(wrapper: any);
    /** List a single page of unread alerts.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    list(sort: SortOptions): Array<object>;
    /** List all pages of unread alerts.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(sort: SortOptions): Array<object>;
    /** List multiple pages of unread alerts until a condition is no longer met.
     *
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Mark unread alerts as read. */
    markAsReadead(): Promise<any>;
    #private;
}
//# sourceMappingURL=AlertsHelper.d.ts.map