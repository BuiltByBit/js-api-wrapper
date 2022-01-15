// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class SortOptions {
    sort;
    order;
    page;

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

    isUnset() {
        return this.sort || this.order || this.page;
    }
}

exports.SortOptions = SortOptions;