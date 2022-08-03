// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const axios = require("axios");

const { Http } = require("./Http.js");
const { Error } = require("./Error.js");
const { Token } = require("./Token.js");
const { Throttler } = require("./Throttler.js");

const { AlertsHelper } = require("./helpers/AlertsHelper.js");
const { ConversationsHelper } = require("./helpers/ConversationsHelper.js");
const { ThreadsHelper } = require("./helpers/ThreadsHelper.js");
const { MembersHelper } = require("./helpers/members/MembersHelper.js");
const { ResourcesHelper } = require("./helpers/resources/ResourcesHelper.js");

/** The primary wrapping type for interactions with BuiltByBit's API. */
class Wrapper {
    /** The base API URL and version which will be prepended to non-absolute paths by axios. */
    static #BASE_URL = "https://api.builtbybit.com/v1";

    #http;

    /** Initialise this wrapper with a provided API token.
     * 
     * <br><br>
     * 
     * By default, initialisation of this wrapper will execute a health check which we expect to always succeed under
     * nominal conditions. If the request does fail, we expect subsequent requests to other endpoints to also fail. In
     * this situation, we conclude that an initialisation failure has occured. We reject the returned Promise and pass
     * back the error to the caller.
     * 
     * @param {Token} token The constructed API token.
     * @param {boolean} health Whether or not to execute a health check during initialisation.
     */
    async init(token, health = true) {
        if (!(token instanceof Token)) throw Error.internal("The 'token' parameter was not of type Token.");
        if (typeof health !== "boolean") throw Error.internal("The 'health' parameter was not a boolean.");

        let client = axios.create({baseURL: Wrapper.#BASE_URL, headers: token.asHeader()});
        this.#http = new Http(client, new Throttler());

        if (health) await this.health();
    }

    /** Schedule an empty request which we expect to always succeed under nominal conditions. */
    async health() {
        if (await this.#http.get("/health") !== "ok") {
            throw Error.internal("The health response contained unexpected data.");
        }
    }

    /** Schedule an empty request and measure how long the API took to respond.
     * 
     * <br><br>
     * 
     * This duration may not be representative of the raw request latency due to the fact that requests may be stalled
     * locally within this wrapper to ensure compliance with rate limiting rules. Whilst this is a trade-off, it can
     * be argued that the returned duration will be more representative of the true latencies experienced.
     * 
     * @return {number} The response time in milliseconds.
     */
    async ping() {
        let start = Date.now();
        await this.health();
        return Date.now() - start;
    }

    /** Access alert-related helper functions.
     * 
     * @return {AlertsHelper} A newly-constructed alert helper instance.
     */
    alerts() {
        return new AlertsHelper(this);
    }

    /** Access conversation-related helper functions.
     * 
     * @return {ConversationsHelper} A newly-constructed conversation helper instance.
     */
    conversations() {
        return new ConversationsHelper(this);
    }

    /** Access thread-related helper functions.
     * 
     * @return {ThreadsHelper} A newly-constructed thread helper instance.
     */
    threads() {
        return new ThreadsHelper(this);
    }

    /** Access member-related helper functions.
     * 
     * @return {MembersHelper} A newly-constructed member helper instance.
     */
    members() {
        return new MembersHelper(this);
    }

    /** Access resource-related helper functions.
     * 
     * @return {ResourcesHelper} A newly-constructed resource helper instance.
     */
    resources() {
        return new ResourcesHelper(this);
    }

    /** Access the inner Http instance which can be used to make raw requests.
     * 
     * @returns {Http} The current Http instance in use by this wrapper.
     */
    http() {
        return this.#http;
    }
}

exports.Wrapper = Wrapper;