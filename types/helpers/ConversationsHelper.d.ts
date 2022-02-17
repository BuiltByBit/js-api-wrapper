/** A helper type for conversation-related API endpoints. */
export class ConversationsHelper {
    constructor(wrapper: any);
    /** List a page of unread conversations.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    list(sort: SortOptions): Array<object>;
    /** List all pages of unread conversations.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(sort: SortOptions): Array<object>;
    /** List multiple pages of unread conversations until a condition is no longer met.
     *
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Start a new conversation.
     *
     * @param {string} title The title of the conversation.
     * @param {string} message The content of the first message in the conversation.
     * @param {Array<number>} recipientIds An array of recipient identifiers.
     *
     * @return {number} The newly-created conversation identifier.
     */
    start(title: string, message: string, recipientIds: Array<number>): number;
    /** List a page of replies to an unread conversation.
     *
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listReplies(conversationId: number, sort: SortOptions): Array<object>;
    /** List all pages of replies to an unread conversation.
     *
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listRepliesAll(conversationId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of replies to an unread conversation until a condition is no longer met.
     *
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listRepliesUntil(conversationId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Reply to an unread conversation
     *
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {string} message The content of the new reply.
     *
     * @return {number} The identifier of the newly-created conversation message.
     */
    reply(conversationId: number, message: string): number;
    #private;
}
//# sourceMappingURL=ConversationsHelper.d.ts.map