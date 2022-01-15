// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

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