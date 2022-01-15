// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { TokenType } = require("./TokenType.js");

/** A type representing an API authentication token. */
class Token {
    #type;
    #value;

    /** Constructs a new token from its constituents.
     * 
     * @param {TokenType} type The type of this token.
     * @param {string} value The value of this token.
     */
    constructor(type, value) {
        if (!(type instanceof TokenType)) {
            throw Error.internal("The 'type' parameter was not of type TokenType.");
        } else if (typeof value !== "string") {
            throw Error.internal("The 'value' parameter was not a string.");
        }

        this.#type = type;
        this.#value = value;
    }

    /** Constructs an object containing the header representation of this token.
     * 
     * @returns An object with a single attribute, 'Authorization'.
     */
    asHeader() {
        return {Authorization: `${this.#type.headerName()} ${this.#value}`};
    }
}

exports.Token = Token;