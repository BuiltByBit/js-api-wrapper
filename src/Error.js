// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

/** A type which represents a parsed error from the API, or an internal wrapper error. */
class Error {
    #code;
    #message;

    constructor(json) {
        this.#code = json.code;
        this.#message = json.message;
    }

    /** Returns a string representation of this error including both the machine and human-readable parts.
     * 
     * @returns {string} A string representation of this error.
     */
    toString() {
        return `${this.#code}: ${this.#message}`;
    }

    /** Returns the machine-readable code of the error.
     * 
     * @returns {string} The machine-readable error code.
     */
    code() {
        return this.#code;
    }

    /** Returns the human-readable message of the error.
     * 
     * @returns {string} The human-readable error message.
     */
    message() {
        return this.#message;
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