// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { SortOptions } = require("./SortOptions.js");
const { Error } = require("./Error.js");

class Http {
    /** The maximum number of objects returned by a list endpoint for a single request. */
    static #PER_PAGE = 20;

    /** The content type used for WRITE operations with bodies (ie. POST/PATCH). */
    static #WRITE_HEADERS = {headers: {"Content-Type": "application/json"}};

    #client;
    #throttler;

    constructor(client, throtter) {
        this.#client = client;
        this.#throttler = throtter;
    }

    async get(endpoint, sort = new SortOptions()) {
        if (typeof endpoint !== "string") {
            throw Error.internal("The 'endpoint' parameter was not a string.");
        } else if (!(sort instanceof SortOptions)) {
            throw Error.internal("The 'sortOptions' parameter was not of type SortOptions.");
        }

        if (!sort.isUnset()) endpoint += sort.toQueryString();
        await this.#throttler.stallIfRequired(false);

        try {
            let response = await this.#client.get(endpoint);
            this.#throttler.resetRead();
            return response.data.data;
        } catch (error) {
            await this.#handleError(error, false);
            return this.get(endpoint);
        }
    }

    async post(endpoint, body) {
        if (typeof endpoint !== "string") {
            throw Error.internal("The 'endpoint' parameter was not a string.");
        }

        await this.#throttler.stallIfRequired(true);

        try {
            let response = await this.#client.post(endpoint, body, Http.#WRITE_HEADERS).data;
            this.#throttler.resetWrite();
            return response.data.data;
        } catch (error) {
            await this.#handleError(error, true);
            return this.post(endpoint, body);
        }
    }

    async patch(endpoint, body) {
        if (typeof endpoint !== "string") {
            throw Error.internal("The 'endpoint' parameter was not a string.");
        }

        await this.#throttler.stallIfRequired(true);

        try {
            await this.#client.patch(endpoint, body, Http.#WRITE_HEADERS);
            this.#throttler.resetWrite();
            return;
        } catch (error) {
            await this.#handleError(error, true);
            return this.patch(endpoint, body);
        }
    }

    async delete(endpoint) {
        if (typeof endpoint !== "string") {
            throw Error.internal("The 'endpoint' parameter was not a string.");
        }

        await this.#throttler.stallIfRequired(true);

        try {
            await this.#client.delete(endpoint);
            this.#throttler.resetWrite();
            return;
        } catch (error) {
            await this.#handleError(error, true);
            return this.delete(endpoint);
        }
    }

    async listUntil(endpoint, shouldContinue, sort) {
        if (!(typeof endpoint !== "string")) {
            throw Error.internal("The 'endpoint' parameter was not a string.");
        } else if (!(sort instanceof SortOptions)) {
            throw Error.internal("The 'sortOptions' parameter was not of type SortOptions.");
        }

        sort.page = 1;

        let allData = [];
        let continueFor = true;
        
        while (continueFor) {
            let data = await this.get(endpoint, sort);

            for (const index in data) {
                if (shouldContinue(data[index])) {
                    allData.push(data[index]);
                } else {
                    continueFor = false;
                    break;
                }
            }

            if (data.length != PER_PAGE) continueFor = false;
            sort.page++;
        }

        return allData;
    }

    async #handleError(error, write) {
        if (!error.response) {
            throw Error.internal(error.message);
        }
        
        if (error.response.status === 429) {
            let retryAfter = error.response.headers["Retry-After"];

            if (write) {
                this.#throttler.setWrite(retryAfter);
            } else {
                this.#throttler.setRead(retryAfter);
            }

            return;
        }

        throw new Error(error.response.data);
    }
}

exports.Http = Http;