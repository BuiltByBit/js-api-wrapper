// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class Http {
    #client;
    #throttler;

    constructor(client, throtter) {
        this.#client = client;
        this.#throttler = throtter;
    }

    async get(endpoint, sortOptions) {
        
    }

    async post(endpoint, body) {
        
    }

    async patch(endpoint, body) {
        
    }

    async delete(endpoint) {
        
    }
}

exports.Http = Http;