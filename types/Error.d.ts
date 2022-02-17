/** A type which represents a parsed error from the API, or an internal wrapper error. */
export class Error {
    /** Constructs a new Error which originated within the wrapper.
     *
     * @param {string} message The internal error message.
     * @returns {Error} The newly-constructed error.
     */
    static internal(message: string): Error;
    constructor(json: any);
    /** Converts this error into a human-readable string.
     *
     * @returns {string} A string representation of this error.
     */
    toString(): string;
    #private;
}
//# sourceMappingURL=Error.d.ts.map