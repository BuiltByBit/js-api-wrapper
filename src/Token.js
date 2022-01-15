// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A type representing an API authentication token. */
class Token {
    #type;
    #value;
    
    /** Sets the values of this token associated with a Private type.
     * 
     * @param {string} value The token value.
     */
    static private(value) {
        let token = new Token();
        token.#type = "Private";
        token.#value = value;
        return token;
    }

    /** Sets the values of this token associated with a Shared type.
     * 
     * @param {string} value The token value.
     */
    static shared(value) {
        let token = new Token();
        token.#type = "Shared";
        token.#value = value;
        return token;
    }

    /** Constructs an object containing the header representation of this token.
     * 
     * @returns An object with a single attribute, 'Authorization'.
     */
    asHeader() {
        return {Authorization: `${this.#type} ${this.#value}`};
    }
}

exports.Token = Token;