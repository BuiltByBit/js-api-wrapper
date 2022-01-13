// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class AlertsHelper {
    #wrapper;

    constructor(wrapper) {
        this.#wrapper = wrapper;
    }

    // List a single page of unread alerts.
    async list(sort_options) {
        return await this.#wrapper.get("/alerts", sort_options);
    }

    // List all pages of unread alerts.
    async list_all(sort_options) {
       return await this.#wrapper.list_until("/alerts", () => true, sort_options);
    }

    // List multiple pages of unread alerts until a condition is no longer met.
    async list_until(should_continue, sort_options) {
        return await this.#wrapper.list_until("/alerts", should_continue, sort_options);
    }

    // Mark unread alerts as read.
    async mark_as_read() {
        return await this.#wrapper.patch("/alerts", { read: true });
    }
}

exports.AlertsHelper = AlertsHelper;