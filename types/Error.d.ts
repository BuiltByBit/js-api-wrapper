/** A type which represents a parsed error from the API, or an internal wrapper error. */
export class Error {
    /** Constructs a new Error which originated within the wrapper.
     *
     * @param {string} message The internal error message.
     * @returns {Error} The newly-constructed error.
     */
    static internal(message: string): Error;
    constructor(json: any);
    /** Returns a string representation of this error including both the machine and human-readable parts.
     *
     * @returns {string} A string representation of this error.
     */
    toString(): string;
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
//# sourceMappingURL=Error.d.ts.map