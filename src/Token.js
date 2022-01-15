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
    private(value) {
        this.#type = "Private";
        this.#value = value;
        return this;
    }

    /** Sets the values of this token associated with a Shared type.
     * 
     * @param {string} value The token value.
     */
    shared(value) {
        this.#type = "Shared";
        this.#value = value;
        return this;
    }

    /** Constructs an object containing the header representation of this token.
     * 
     * @returns An object with a single attribute, 'Authorization'.
     */
    #asHeader() {
        return {Authorization: `${this.#type} ${this.#value}`};
    }
}

exports.Token = Token;