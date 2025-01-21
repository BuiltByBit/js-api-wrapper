/** A type representing the sorting options available for listing-style endpoints. */
export class SortOptions {
    sort: any;
    order: any;
    page: any;
    /** Convets this SortOptions instance into a query string.
     *
     * @returns {string} The query-string representation.
     */
    toQueryString(): string;
    /** Returns whether or not any sort options have been set.
     *
     * @returns {boolean} Whether or not any sort options have been set.
     */
    isSet(): boolean;
}
//# sourceMappingURL=SortOptions.d.ts.map