/** A type that handles raw HTTP requests to the API. */
export class Http {
    /** The maximum number of objects returned by a list endpoint for a single request. */
    static "__#2@#PER_PAGE": number;
    /** The content type used for WRITE operations with bodies (ie. POST/PATCH). */
    static "__#2@#WRITE_HEADERS": {
        headers: {
            "Content-Type": string;
        };
    };
    constructor(client: any, throtter: any);
    /** Schedules a GET request for a specific endpoint.
     *
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {SortOptions | undefined} sort The optional set of sort options.
     *
     * @return {*} The response data on success.
     */
    get(endpoint: string, sort?: SortOptions | undefined): any;
    /** Schedules a POST request for a specific endpoint.
     *
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {object} body The request body options.
     *
     * @return {number} The response data on success (ie. a content identifier).
     */
    post(endpoint: string, body: object): number;
    /** Schedules a PATCH request for a specific endpoint.
     *
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     * @param {object} body The request body options.
     */
    patch(endpoint: string, body: object): any;
    /** Schedules a DELETE request for a specific endpoint.
     *
     * @param {string} endpoint The path of the endpoint (incl. any path parameters).
     */
    delete(endpoint: string): any;
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
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw objects.
     */
    listUntil(endpoint: string, shouldContinue: (arg0: object) => boolean, sort?: SortOptions | undefined): Array<object>;
    #private;
}
import { SortOptions } from "./SortOptions.js";
//# sourceMappingURL=Http.d.ts.map