// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/**
 * @typedef {object} Alert
 * @property {number} caused_member_id
 * @property {string} content_type
 * @property {number} content_id
 * @property {string} alert_type
 * @property {number} alert_date
 */

/** A helper type for alert-related API endpoints. */
class AlertsHelper {
    #wrapper;

    constructor(wrapper) {
        this.#wrapper = wrapper;
    }

    /** List a single page of unread alerts.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<Alert>} An array of raw data objects.
     */
    async list(sort) {
        return await this.#wrapper.http().get("/alerts", sort);
    }

    /** List all pages of unread alerts.
     * 
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<Alert>} An array of raw data objects.
     */
    async listAll(sort) {
        return await this.#wrapper.http().listUntil("/alerts", () => true, sort);
    }

    /** List multiple pages of unread alerts until a condition is no longer met.
     * 
     * @param {function(Alert):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<Alert>} An array of raw data objects.
     */
    async listUntil(shouldContinue, sort) {
        return await this.#wrapper.http().listUntil("/alerts", shouldContinue, sort);
    }

    /** Mark unread alerts as read. */
    async markAsRead() {
        return await this.#wrapper.http().patch("/alerts", { read: true });
    }
}

exports.AlertsHelper = AlertsHelper;