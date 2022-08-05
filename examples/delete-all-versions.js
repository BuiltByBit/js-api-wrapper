// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("@builtbybit/api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://builtbybit.com/account/api");
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
