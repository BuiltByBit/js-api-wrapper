/** A type which represents a parsed error from the API, or an internal wrapper error. */
export class APIError extends Error {
    /** Constructs a new Error which originated within the wrapper.
     *
     * @param {string} message The internal error message.
     * @returns {APIError} The newly-constructed error.
     */
    static internal(message: string): APIError;
    constructor(json: any);
    /** Returns the machine-readable code of the error.
     *
     * @returns {string} The machine-readable error code.
     */
    code(): string;
    /** Returns the human-readable message of the error.
     *
     * @returns {string} The human-readable error message.
     */
    message(): string;
    #private;
}
//# sourceMappingURL=APIError.d.ts.map