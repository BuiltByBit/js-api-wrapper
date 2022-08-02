// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

/** A type representing the different token types. */
class TokenType {
    static PRIVATE = new TokenType("Private");
    static SHARED = new TokenType("Shared");

    #headerName;

    constructor(headerName) {
        this.#headerName = headerName;
    }

    headerName() {
        return this.#headerName;
    }
}

exports.TokenType = TokenType;