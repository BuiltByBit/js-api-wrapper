export type Conversation = {
    conversation_id: number;
    title: string;
    creation_date: number;
    creator_id: number;
    last_message_date: number;
    last_read_date: number;
    open: bool;
    reply_count: number;
    recipient_ids: Array<number>;
};
export type Reply = {
    message_id: number;
    message_date: number;
    author_id: number;
    message: string;
};
/**
 * @typedef {object} Conversation
 * @property {number} conversation_id
 * @property {string} title
 * @property {number} creation_date
 * @property {number} creator_id
 * @property {number} last_message_date
 * @property {number} last_read_date
 * @property {bool} open
 * @property {number} reply_count
 * @property {Array<number>} recipient_ids
 */
/**
 * @typedef {object} Reply
 * @property {number} message_id
 * @property {number} message_date
 * @property {number} author_id
 * @property {string} message
 */
/** A helper type for conversation-related API endpoints. */
export class ConversationsHelper {
    constructor(wrapper: any);
    /** List a page of unread conversations.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<Conversation>} An array of raw data objects.
     */
    list(sort: SortOptions): Array<Conversation>;
    /** List all pages of unread conversations.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<Conversation>} An array of raw data objects.
     */
    listAll(sort: SortOptions): Array<Conversation>;
    /** List multiple pages of unread conversations until a condition is no longer met.
     *
     * @param {function(Conversation):boolean} shouldContinue A function which determines if further pages are
     * requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Conversation>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: Conversation) => boolean, sort: SortOptions): Array<Conversation>;
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
     * @return {Array<Reply>} An array of raw data objects.
     */
    listReplies(conversationId: number, sort: SortOptions): Array<Reply>;
    /** List all pages of replies to an unread conversation.
     *
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Reply>} An array of raw data objects.
     */
    listRepliesAll(conversationId: number, sort: SortOptions): Array<Reply>;
    /** List multiple pages of replies to an unread conversation until a condition is no longer met.
     *
     * @param {number} conversationId The identifier of the unread conversation.
     * @param {function(Reply):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Reply>} An array of raw data objects.
     */
    listRepliesUntil(conversationId: number, shouldContinue: (arg0: Reply) => boolean, sort: SortOptions): Array<Reply>;
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