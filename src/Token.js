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
        #type = "Private";
        #value = value;
    }

    /** Sets the values of this token associated with a Shared type.
     * 
     * @param {string} value The token value.
     */
    shared(value) {
        #type = "Shared";
        #value = value;
    }

    /** Constructs an object containing the header representation of this token.
     * 
     * @returns An object with a single attribute, 'Authorization'.
     */
    #asHeader() {
        return {Authorization: `${#type} ${#value}`};
    }
}