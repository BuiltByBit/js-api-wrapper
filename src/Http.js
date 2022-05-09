// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { SortOptions } = require("./SortOptions.js");
const { Error } = require("./Error.js");

/** A type that handles raw HTTP requests to the API. */
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

    /** Schedules a GET request for a specific endpoint.
     * 
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {SortOptions} sort The optional set of sort options.
     * 
     * @return {*} The response data on success.
     */
    async get(endpoint, sort = new SortOptions()) {
        if (typeof endpoint !== "string") throw Error.internal("The 'endpoint' parameter was not a string.");
        if (!(sort instanceof SortOptions)) throw Error.internal("The 'sort' parameter was not of type SortOptions.");

        if (sort.isSet()) endpoint += sort.toQueryString();
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

    /** Schedules a POST request for a specific endpoint.
     * 
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {object} body The request body options.
     * 
     * @return {number} The response data on success (ie. a content identifier).
     */
    async post(endpoint, body) {
        if (typeof endpoint !== "string") throw Error.internal("The 'endpoint' parameter was not a string.");

        await this.#throttler.stallIfRequired(true);

        try {
            let response = await this.#client.post(endpoint, body, Http.#WRITE_HEADERS);
            this.#throttler.resetWrite();
            return response.data.data;
        } catch (error) {
            await this.#handleError(error, true);
            return this.post(endpoint, body);
        }
    }

    /** Schedules a PATCH request for a specific endpoint.
     * 
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {object} body The request body options.
     */
    async patch(endpoint, body) {
        if (typeof endpoint !== "string") throw Error.internal("The 'endpoint' parameter was not a string.");

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

    /** Schedules a DELETE request for a specific endpoint.
     * 
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     */
    async delete(endpoint) {
        if (typeof endpoint !== "string") throw Error.internal("The 'endpoint' parameter was not a string.");

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

    /** A raw function returning a compiled list of objects from all available pages or until we decide to stop.
     * 
     * <br><br>
     * 
     * 'shouldContinue' expects a function with a single parameter and should return a boolean representing if we
     * should continue to add the current (and future) objects to the final list (and thus, if we should continue
     * to make requests). This function is called for every single object as a parameter within each request's
     * returned list.
     * 
     * <br><br>
     * 
     * This function continuously makes requests to a specific endpoint with a set of sort options, and increments the
     * sort option page count after each request.
     * 
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * 
     * @return {Array<object>} An array of raw objects.
     */
    async listUntil(endpoint, shouldContinue, sort = new SortOptions()) {
        if (typeof endpoint !== "string") throw Error.internal("The 'endpoint' parameter was not a string.");
        if (!(sort instanceof SortOptions)) throw Error.internal("The 'sort' parameter was not of type SortOptions.");

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

            if (data.length != Http.#PER_PAGE) continueFor = false;
            sort.page++;
        }

        return allData;
    }

    /** An internal function which throws an error if the provided error indicates the request is not retryable (ie.
     * a non-rate-limiting error).
     * 
     * @param {*} error The provided error.
     * @param {boolean} write Whether or not the request was of the WRITE type (ie. POST/PATCH/DELETE).
     */
    async #handleError(error, write) {
        if (!error.response) {
            throw Error.internal(error.message);
        }
        
        if (error.response.status === 429) {
            let retryAfter = error.response.headers["retry-after"];

            if (write) {
                this.#throttler.setWrite(retryAfter);
            } else {
                this.#throttler.setRead(retryAfter);
            }

            return;
        }

        throw new Error(error.response.data.error);
    }
}

exports.Http = Http;