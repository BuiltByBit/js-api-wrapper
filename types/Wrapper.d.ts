/** The primary wrapping type for interactions with BuiltByBit's API. */
export class Wrapper {
    /** The base API URL and version which will be prepended to non-absolute paths by axios. */
    static "__#18@#BASE_URL": string;
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
    init(token: Token, health?: boolean): Promise<void>;
    /** Schedule an empty request which we expect to always succeed under nominal conditions. */
    health(): Promise<void>;
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
    ping(): number;
    /** Access alert-related helper functions.
     *
     * @return {AlertsHelper} A newly-constructed alert helper instance.
     */
    alerts(): AlertsHelper;
    /** Access conversation-related helper functions.
     *
     * @return {ConversationsHelper} A newly-constructed conversation helper instance.
     */
    conversations(): ConversationsHelper;
    /** Access thread-related helper functions.
     *
     * @return {ThreadsHelper} A newly-constructed thread helper instance.
     */
    threads(): ThreadsHelper;
    /** Access member-related helper functions.
     *
     * @return {MembersHelper} A newly-constructed member helper instance.
     */
    members(): MembersHelper;
    /** Access resource-related helper functions.
     *
     * @return {ResourcesHelper} A newly-constructed resource helper instance.
     */
    resources(): ResourcesHelper;
    /** Access the inner Http instance which can be used to make raw requests.
     *
     * @returns {Http} The current Http instance in use by this wrapper.
     */
    http(): Http;
    #private;
}
import { AlertsHelper } from "./helpers/AlertsHelper.js";
import { ConversationsHelper } from "./helpers/ConversationsHelper.js";
import { ThreadsHelper } from "./helpers/ThreadsHelper.js";
import { MembersHelper } from "./helpers/members/MembersHelper.js";
import { ResourcesHelper } from "./helpers/resources/ResourcesHelper.js";
import { Http } from "./Http.js";
//# sourceMappingURL=Wrapper.d.ts.map