// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();


async function main() {
    await wrapper.init(token);

    let title = "Verification";
    let message = "This message verifies that I am speaking with you.";

    rl.question("What is the ID of the user you'd like to start a conversation with?",  (userId) => {
        let conversation = wrapper.conversations().start(title, message, new Array(userId));
        console.info("Conversation " + conversation + " created for verification");
    });

}

main().catch(error => console.error("ERROR: " + error));