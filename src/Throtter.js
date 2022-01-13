// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class Throttler {
    #readLastRetry;
    #readLastRequest;

    #writeLastRetry;
    #writeLastRequest;

    constructor() {
        #readLastRetry = 0;
        #readLastRequest = Date.now();

        #writeLastRetry = 0;
        #writeLastRequest = Date.now();
    }


}