// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.SHARED, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

// Injected placeholders.
let resourceId = "%%__RESOURCE__%%";
let versionId = "%%__VERSION__%%";

async function main() {
    await wrapper.init(token);

    let latest = await wrapper.resources().versions().latest(resourceId);

    if (Number(versionId) === latest["version_id"]) {
        console.log("Up to date.");
    } else {
        console.log(`A new version exists. https://www.mc-market.org/resources/${resourceId}/`);
    }
}

main().catch(error => console.error("ERROR: " + error));
