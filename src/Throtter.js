// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class Throttler {
    #readLastRetry;
    #readLastRequest;

    #writeLastRetry;
    #writeLastRequest;

    constructor() {
        this.#readLastRetry = 0;
        this.#readLastRequest = Date.now();

        this.#writeLastRetry = 0;
        this.#writeLastRequest = Date.now();
    }
}