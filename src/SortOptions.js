// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A type representing the sorting options available for listing-style endpoints. */
class SortOptions {
    sort;
    order;
    page;

    /** Convets this SortOptions instance into a query string.
     * 
     * @returns {string} The query-string representation.
     */
    toQueryString() {
        let asArray = [];

        if (this.sort) {
            asArray.push(`sort=${this.sort}`);
        }
        if (this.order) {
            asArray.push(`order=${this.order}`);
        }
        if (this.page) {
            asArray.push(`page=${this.page}`);
        }
        
        return "?" + asArray.join("&");
    }

    /** Returns whether or not any sort options have been set.
     * 
     * @returns {bool} Whether or not any sort options have been set.
     */
    isSet() {
        return this.sort || this.order || this.page;
    }
}

exports.SortOptions = SortOptions;