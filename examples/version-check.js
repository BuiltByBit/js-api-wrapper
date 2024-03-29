// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("@builtbybit/api-wrapper");

let token = new Token(TokenType.SHARED, "Find @ https://builtbybit.com/account/api");
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
        console.log(`A new version exists. https://builtbybit.com/resources/${resourceId}/`);
    }
}

main().catch(error => console.error("ERROR: " + error));
