// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.SHARED, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

// Injected placeholders.
let resourceId = Number("%%__RESOURCE__%%");
let memberId = Number("%%__USER__%%");
let nonce = Number("%%__NONCE__%%");
let timestamp = Number("%%__TIMESTAMP__%%");

async function main() {
    await wrapper.init(token);

    let license = await wrapper.resources().licenses().fetchMember(resourceId, memberId, nonce, timestamp);
    let currentTimestamp = Math.floor(new Date().getTime() / 1000);

    if (license.permanent && !license.active) {
        throw "A license has been found but it isn't currently active.";
    }

    if (!license.permanent && (license["start_date"] > currentTimestamp || license["end_date"] < currentTimestamp)) {
        throw "A license has been found but it has since expired.";
    }

    console.log("Active license found, returning from function without throwing an error.");
}

main().catch(error => console.error("ERROR: " + error));
