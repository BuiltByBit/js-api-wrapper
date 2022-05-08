// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/** A type which represents a parsed error from the API, or an internal wrapper error. */
class Error {
    #code;
    #message;

    constructor(json) {
        this.#code = json?.code;
        this.#message = json?.message;
    }

    /** Converts this error into a human-readable string.
     * 
     * @returns {string} A string representation of this error.
     */
    toString() {
        return `${this.#code}: ${this.#message}`;
    }

    /** Constructs a new Error which originated within the wrapper.
     * 
     * @param {string} message The internal error message.
     * @returns {Error} The newly-constructed error.
     */
    static internal(message) {
        return new Error({code: "InternalWrapperError", message});
    }
}

exports.Error = Error;