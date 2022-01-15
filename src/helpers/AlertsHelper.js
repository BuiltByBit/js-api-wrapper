// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class AlertsHelper {
    #wrapper;

    constructor(wrapper) {
        this.#wrapper = wrapper;
    }

    // List a single page of unread alerts.
    async list(sortOptions) {
        return await this.#wrapper.http().get("/alerts", sortOptions);
    }

    // List all pages of unread alerts.
    async listAll(sortOptions) {
        return await this.#wrapper.http().listUntil("/alerts", () => true, sortOptions);
    }

    // List multiple pages of unread alerts until a condition is no longer met.
    async listUntil(shouldContinue, sortOptions) {
        return await this.#wrapper.http().listUntil("/alerts", shouldContinue, sortOptions);
    }

    // Mark unread alerts as read.
    async markAsReadead() {
        return await this.#wrapper.http().patch("/alerts", { read: true });
    }
}

exports.AlertsHelper = AlertsHelper;