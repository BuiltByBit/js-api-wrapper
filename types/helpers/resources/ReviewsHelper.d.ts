export type Review = {
    review_id: number;
    reviewer_id: number;
    review_date: number;
    rating: number;
    message: string;
    response: string;
};
/**
 * @typedef {object} Review
 * @property {number} review_id
 * @property {number} reviewer_id
 * @property {number} review_date
 * @property {number} rating
 * @property {string} message
 * @property {string} response
 */
/** A helper type for resource review-related API endpoints. */
export class ReviewsHelper {
    constructor(wrapper: any);
    /** List a page of reviews for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Review>} An array of raw data objects.
     */
    list(resourceId: number, sort: SortOptions): Array<Review>;
    /** List all pages of reviews for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Review>} An array of raw data objects.
     */
    listAll(resourceId: number, sort: SortOptions): Array<Review>;
    /** List multiple pages of reviews for a given resource until a condition is no longer met.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {function(Review):boolean} shouldContinue A function which determines if further pages are requested.
     * @param {SortOptions} sort An optional set of sort options.
     *
     * @return {Array<Review>} An array of raw data objects.
     */
    listUntil(resourceId: number, shouldContinue: (arg0: Review) => boolean, sort: SortOptions): Array<Review>;
    /** Fetch a resource review by a member for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} memberId The identifier of the member.
     *
     * @return {Review} A raw data object.
     */
    fetch(resourceId: number, memberId: number): Review;
    /** Respond to a review for a given resource.
     *
     * @param {number} resourceId The identifier of the resource.
     * @param {number} reviewId The identifier of the review.
     * @param {string} response The content of the author response.
     */
    respond(resourceId: number, reviewId: number, response: string): Promise<any>;
    #private;
}
//# sourceMappingURL=ReviewsHelper.d.ts.map