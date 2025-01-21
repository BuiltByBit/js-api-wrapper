export type ProfilePost = {
    profile_post_id: number;
    author_id: number;
    post_date: number;
    message: string;
    comment_count: number;
};
/**
 * @typedef {object} ProfilePost
 * @property {number} profile_post_id
 * @property {number} author_id
 * @property {number} post_date
 * @property {string} message
 * @property {number} comment_count
 */
/** A helper type for profile post-related API endpoints. */
export class ProfilePostsHelper {
    constructor(wrapper: any);
    /** List a page of profile posts on your profile.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<ProfilePost>} An array of raw data objects.
     */
    list(sort: SortOptions | undefined): Array<ProfilePost>;
    /** List all pages of profile posts on your profile.
     *
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<ProfilePost>} An array of raw data objects.
     */
    listAll(sort: SortOptions | undefined): Array<ProfilePost>;
    /** List multiple pages of profile posts on your profile until a condition is no longer met.
     *
     * @param {function(ProfilePost):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions | undefined} sort An optional set of sort options.
     * @return {Array<ProfilePost>} An array of raw data objects.
     */
    listUntil(shouldContinue: (arg0: ProfilePost) => boolean, sort: SortOptions | undefined): Array<ProfilePost>;
    /** Fetch information about a profile post on your profile.
     *
     * @param {number} profilePostId The identifier of the profile post to fetch.
     * @return {ProfilePost} A raw data object.
     */
    fetch(profilePostId: number): ProfilePost;
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
import { SortOptions } from "../../SortOptions";
//# sourceMappingURL=ProfilePostsHelper.d.ts.map