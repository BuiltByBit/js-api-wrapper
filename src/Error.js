// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class Error {
    #code;
    #message;

    constructor(json) {
        this.#code = json.code;
        this.#message = json.message;
    }

    toString() {
        return `${this.#code}: ${this.#message}`;
    }

    static internal(message) {
        return new Error({code: "InternalWrapperError", message});
    }
}

exports.Error = Error;