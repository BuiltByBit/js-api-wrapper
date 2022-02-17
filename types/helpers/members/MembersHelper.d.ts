/** A helper type for member-related API endpoints. */
export class MembersHelper {
    constructor(wrapper: any);
    /** Fetch information about yourself.
     *
     * @return {object} A raw data object.
     */
    self(): object;
    /** Modify information about yourself.
     *
     * @param {string} aboutMe The 'about me' field content, or undefined.
     * @param {string} customTitle The 'custom title' field content, or undefined.
     * @param {string} signature The 'signature' field content, or undefined.
     */
    modifySelf(aboutMe: string, customTitle: string, signature: string): Promise<any>;
    /** Fetch information about a member.
     *
     * @param {number} memberId The identifier of the member.
     * @return {object} A raw data object.
     */
    fetch(memberId: number): object;
    /** Fetch information about a member by username.
     *
     * @param {string} username The username of the member.
     * @return {object} A raw data object.
     */
    fetchByUsername(username: string): object;
    /** Fetch a list of recently issued bans.
     *
     * @return {Array<object>} An array of raw data objects.
     */
    bans(): Array<object>;
    /** Access profile post-related helper functions.
     *
     * @return {ProfilePostsHelper} A newly-constructed profile post helper instance.
     */
    profilePosts(): ProfilePostsHelper;
    #private;
}
import { ProfilePostsHelper } from "./ProfilePostsHelper.js";
//# sourceMappingURL=MembersHelper.d.ts.map