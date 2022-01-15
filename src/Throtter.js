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

    setRead(retry) {
        this.#readLastRetry = retry;
        this.#readLastRequest = Date.now();
    }

    setWrite(retry) {
        this.#writeLastRetry = retry;
        this.#writeLastRequest = Date.now();
    }

    resetRead() {
        this.#readLastRetry = 0;
        this.#readLastRequest = Date.now();
    }

    resetWrite() {
        this.#writeLastRetry = 0;
        this.#writeLastRequest = Date.now();
    }

    async stallIfRequired(write) {
        let stall = true;
    
        while (stall) {
            let time = Date.now();
    
            // As rate limits for WRITE operations are applied independently of those applied to READ operations, we first
            // determine if we're in a WRITE operation, and if we are, attempt to stall if required. `stall_for_helper` will
            // return true if a stall was required (and it completed the stall), or false if no stall was required.
            if (write && (await this.#stallForHelper(this.#writeLastRetry, this.#writeLastRequest, time))) {
                continue;
            } else if (write) {
                stall = false;
                continue;
            }
    
            // If we haven't started a new iteration of this loop yet, we must be in a READ operation.
            if (await this.#stallForHelper(this.#readLastRetry, this.#readLastRequest, time)) {
                continue;
            } else {
                stall = false;
            }
        }
    }
    
    // A helper function for `stall_if_required` which computes over a generic set of rate limiting parameters.
    async #stallForHelper(lastRetry, lastRequest, time) {
        // If we've previously hit a rate limit, no other request has been completed with a non-429 response since, and
        // we're still within the Retry-After delay period, we should stall this request. The exact amount of time we stall
        // for derives from the amount of time that has passed since the last request, minus the Retry-After value.
        if (lastRetry > 0 && time - lastRequest < lastRetry) {
            let stallFor = lastRetry - (time - lastRequest);
            await new Promise((resolve) => setTimeout(resolve, stallFor));
    
            return true;
        } else {
            return false;
        }
    }
}

exports.Throttler = Throttler;