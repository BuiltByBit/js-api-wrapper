export type Alert = {
    caused_member_id: number;
    content_type: string;
    content_id: number;
    alert_type: string;
    alert_date: number;
};
/**
 * @typedef {object} Alert
 * @property {number} caused_member_id
 * @property {string} content_type
 * @property {number} content_id
 * @property {string} alert_type
 * @property {number} alert_date
 */
/** A helper type for alert-related API endpoints. */
export class AlertsHelper {
    constructor(wrapper: any);
    /** List a single page of unread alerts.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<Alert>} An array of raw data objects.
     */
    list(sort: SortOptions): Array<Alert>;
    /** List all pages of unread alerts.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<Alert>} An array of raw data objects.
     */
    listAll(sort: SortOptions): Array<Alert>;
    /** List multiple pages of unread alerts until a condition is no longer met.
     *
     * @param {function(Alert):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Alert>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: Alert) => boolean, sort: SortOptions): Array<Alert>;
    /** Mark unread alerts as read. */
    markAsRead(): Promise<any>;
    #private;
}
//# sourceMappingURL=AlertsHelper.d.ts.map