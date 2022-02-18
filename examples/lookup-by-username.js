// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

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

    rl.question("What is the username of the user you'd like to lookup?", (username) => {
        let userObj = JSON.parse(wrapper.members().fetchByUsername(username));
        let memberId = userObj.member_id;
        let joinDate = userObj.join_date;
        let lastActivityDate = userObj.last_activity_date;
        let banned = userObj.banned;
        let suspended = userObj.suspended;
        let restricted = userObj.restricted;
        let disabled = userObj.disabled;
        let postCount = userObj.post_count;

        console.log(`${username} Statistics:\n
            Member ID: ${memberId}\n
            Join Date: new Date(${joinDate})\n
            Last Activity: new Date(${lastActivityDate})\n
            Banned: ${banned}\n
            Suspended: ${suspended}\n
            Restricted: ${restricted}\n
            Disabled: ${disabled}\n
            Post Count: ${postCount}`
        );
    });
}

main().catch(error => console.error("ERROR: " + error));