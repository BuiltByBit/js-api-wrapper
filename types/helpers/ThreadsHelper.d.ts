export type BasicThread = {
    thread_id: number;
    title: string;
    reply_count: number;
    view_count: number;
    creation_date: number;
    last_message_date: number;
};
export type Thread = {
    thread_id: number;
    forum_name: string;
    title: string;
    reply_count: number;
    view_count: number;
    post_date: number;
    thread_type: string;
    thread_open: boolean;
    last_post_date: number;
};
export type Reply = {
    reply_id: number;
    author_id: number;
    post_date: number;
    message: string;
};
/**
 * @typedef {object} BasicThread
 * @property {number} thread_id
 * @property {string} title
 * @property {number} reply_count
 * @property {number} view_count
 * @property {number} creation_date
 * @property {number} last_message_date
 */
/**
 * @typedef {object} Thread
 * @property {number} thread_id
 * @property {string} forum_name
 * @property {string} title
 * @property {number} reply_count
 * @property {number} view_count
 * @property {number} post_date
 * @property {string} thread_type
 * @property {boolean} thread_open
 * @property {number} last_post_date
 */
/**
 * @typedef {object} Reply
 * @property {number} reply_id
 * @property {number} author_id
 * @property {number} post_date
 * @property {string} message
 */
/** A helper type for thread-related API endpoints. */
export class ThreadsHelper {
    constructor(wrapper: any);
    /** List a page of threads you own or collaborate on.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicThread>} An array of raw data objects.
     */
    list(sort: SortOptions | undefined): Array<BasicThread>;
    /** List all pages of threads you own or collaborate on.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<BasicThread>} An array of raw data objects.
     */
    listAll(sort: SortOptions | undefined): Array<BasicThread>;
    /** List multiple pages of threads you own or collaborate on until a condition is no longer met.
     *
     * @param {function(BasicThread):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<BasicThread>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: BasicThread) => boolean, sort: SortOptions | undefined): Array<BasicThread>;
    /** Fetch information about a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @return {Thread} A raw data object.
     */
    fetch(threadId: number): Thread;
    /** List a page of replies for a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Reply>} An array of raw data objects.
     */
    listReplies(threadId: number, sort: SortOptions | undefined): Array<Reply>;
    /** List all pages of replies for a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Reply>} An array of raw data objects.
     */
    listRepliesAll(threadId: number, sort: SortOptions | undefined): Array<Reply>;
    /** List multiple pages of replies for a thread you own or collaborate on until a condition is no longer met.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {function(Reply):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     *
     * @return {Array<Reply>} An array of raw data objects.
     */
    listRepliesUntil(threadId: number, shouldContinue: (arg0: Reply) => boolean, sort: SortOptions | undefined): Array<Reply>;
    /** Reply to a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {string} message The content of the new reply.
     *
     * @return {number} The identifier of the newly-created post.
     */
    reply(threadId: number, message: string): number;
    #private;
}
//# sourceMappingURL=ThreadsHelper.d.ts.map