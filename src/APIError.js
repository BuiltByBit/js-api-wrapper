// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

/** A type which represents a parsed error from the API, or an internal wrapper error. */
class APIError extends Error {
    #code;
    #message;

    constructor(json) {
        super(`${json.code} - ${json.message}`);

        this.#code = json.code;
        this.#message = json.message;
    }

    /** Returns the machine-readable code of the error.
     * 
     * @return {string} The machine-readable error code.
     */
    get code() {
        return this.#code;
    }

    /** Returns the human-readable message of the error.
     * 
     * @return {string} The human-readable error message.
     */
    get message() {
        return this.#message;
    }

    /** Constructs a new Error which originated within the wrapper.
     * 
     * @param {string} message The internal error message.
     * @returns {APIError} The newly-constructed error.
     */
    static internal(message) {
        return new APIError({code: "InternalWrapperError", message});
    }
}

exports.APIError = APIError;