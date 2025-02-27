// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { TokenType } = require("./TokenType");

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