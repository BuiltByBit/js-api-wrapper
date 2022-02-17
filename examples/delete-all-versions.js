// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

let resourceId = 0;

async function main() {
    await wrapper.init(token);

    let versions = await wrapper.resources().versions().listAll(resourceId);

    // The current version cannot be deleted so we remove it from the returned list of versions.
    versions.shift();

    for (const index in versions) {
        let versionId = versions[index]["version_id"];

        await wrapper.resources().versions().delete(resourceId, versionId);
        console.log("Successfully deleted version with id: " + versionId);
    }
}

main().catch(error => console.error("ERROR: " + error));
