export type Member = {
    member_id: number;
    username: string;
    join_date: number;
    last_activity_date?: number;
    banned: boolean;
    suspended: boolean;
    restricted: boolean;
    disabled: boolean;
    premium: boolean;
    supreme: boolean;
    ultimate: boolean;
    discord_id?: number;
    avatar_url: string;
    post_count: number;
    resource_count: number;
    purchase_count: number;
    feedback_positive: number;
    feedback_neutral: number;
    feedback_negative: number;
};
export type Ban = {
    member_id: number;
    banned_by_id: number;
    ban_date: number;
    reason: string;
};
/**
 * @typedef {object} Member
 * @property {number} member_id
 * @property {string} username
 * @property {number} join_date
 * @property {number} [last_activity_date]
 * @property {boolean} banned
 * @property {boolean} suspended
 * @property {boolean} restricted
 * @property {boolean} disabled
 * @property {boolean} premium
 * @property {boolean} supreme
 * @property {boolean} ultimate
 * @property {number} [discord_id]
 * @property {string} avatar_url
 * @property {number} post_count
 * @property {number} resource_count
 * @property {number} purchase_count
 * @property {number} feedback_positive
 * @property {number} feedback_neutral
 * @property {number} feedback_negative
 */
/**
 * @typedef {object} Ban
 * @property {number} member_id
 * @property {number} banned_by_id
 * @property {number} ban_date
 * @property {string} reason
 */
/** A helper type for member-related API endpoints. */
export class MembersHelper {
    constructor(wrapper: any);
    /** Fetch information about yourself.
     *
     * @return {Member} A raw data object.
     */
    self(): Member;
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
     * @return {Member} A raw data object.
     */
    fetch(memberId: number): Member;
    /** Fetch information about a member by username.
     *
     * @param {string} username The username of the member.
     * @return {Member} A raw data object.
     */
    fetchByUsername(username: string): Member;
    /** Fetch information about a member by Discord identifier.
     *
     * @param {number} discordId The identifier of the Discord account.
     * @return {Member} A raw data object.
     */
    fetchByDiscord(discordId: number): Member;
    /** Fetch a list of recently issued bans.
     *
     * @return {Array<Ban>} An array of raw data objects.
     */
    bans(): Array<Ban>;
    /** Access profile post-related helper functions.
     *
     * @return {ProfilePostsHelper} A newly-constructed profile post helper instance.
     */
    profilePosts(): ProfilePostsHelper;
    #private;
}
import { ProfilePostsHelper } from "./ProfilePostsHelper.js";
//# sourceMappingURL=MembersHelper.d.ts.map