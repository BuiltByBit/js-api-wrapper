/** A type representing an API authentication token. */
export class Token {
    /** Constructs a new token from its constituents.
     *
     * @param {TokenType} type The type of this token.
     * @param {string} value The value of this token.
     */
    constructor(type: TokenType, value: string);
    /** Constructs an object containing the header representation of this token.
     *
     * @returns An object with a single attribute, 'Authorization'.
     */
    asHeader(): {
        Authorization: string;
    };
    #private;
}
//# sourceMappingURL=Token.d.ts.map