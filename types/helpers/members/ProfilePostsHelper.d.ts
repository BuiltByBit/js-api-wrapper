/** A helper type for profile post-related API endpoints. */
export class ProfilePostsHelper {
    constructor(wrapper: any);
    /** List a page of profile posts on your profile.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {object} A raw data object.
     */
    list(sort: SortOptions): object;
    /** List all pages of profile posts on your profile.
     *
     * @param {SortOptions} sort An optional set of sort options.
     * @return {object} A raw data object.
     */
    listAll(sort: SortOptions): object;
    /** List multiple pages of profile posts on your profile until a condition is no longer met.
     *
     * @param {function(object):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     * @return {object} A raw data object.
     */
    listUntil(shouldContinue: (arg0: object) => boolean, sort: SortOptions): object;
    /** Fetch information about a profile post on your profile.
     *
     * @param {number} profilePostId The identifier of the profile post to fetch.
     * @return {object} A raw data object.
     */
    fetch(profilePostId: number): object;
    /** Create a new profile post on your profile.
     *
     * @param {string} message The content of the message to modify to.
     * @return {number} The identifer of the newly-created profile post.
     */
    create(message: string): number;
    /** Modify a profile post on your profile that you've authored.
     *
     * @param {number} profilePostId The identifier of the profile post to modify.
     * @param {string} message The content of the message to modify to.
     */
    modify(profilePostId: number, message: string): Promise<any>;
    /** Delete a profile post on your profile that you've authored.
     *
     * @param {number} profilePostId The identifier of the profile post to delete.
     */
    delete(profilePostId: number): Promise<any>;
    #private;
}
//# sourceMappingURL=ProfilePostsHelper.d.ts.map