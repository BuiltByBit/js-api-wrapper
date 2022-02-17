/** A helper type for thread-related API endpoints. */
export class ThreadsHelper {
    constructor(wrapper: any);
    /** List a page of threads you own or collaborate on.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    list(sort: SortOptions): Array<object>;
    /** List all pages of threads you own or collaborate on.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {Array<object>} An array of raw data objects.
     */
    listAll(sort: SortOptions): Array<object>;
    /** List multiple pages of threads you own or collaborate on until a condition is no longer met.
     *
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
    /** Fetch information about a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @return {object} A raw data object.
     */
    fetch(threadId: number): object;
    /** List a page of replies for a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listReplies(threadId: number, sort: SortOptions): Array<object>;
    /** List all pages of replies for a thread you own or collaborate on.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listRepliesAll(threadId: number, sort: SortOptions): Array<object>;
    /** List multiple pages of replies for a thread you own or collaborate on until a condition is no longer met.
     *
     * @param {number} threadId The identifier of the thread.
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    listRepliesUntil(threadId: number, shouldContinue: (arg0: object) => boolean, sort: SortOptions): Array<object>;
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