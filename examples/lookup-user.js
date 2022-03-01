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

    rl.question("Lookup by (u)sername or by (i)d? ", (answer) => {
        let userObj;
        switch (answer.toLowerCase()) {
        case "u":
            try {
                rl.question("What is the username of the user you'd like to lookup? ", async (username) => {
                    userObj = await wrapper.members().fetchByUsername(username).catch(e => { console.error(e); });
                    let memberId = userObj.member_id;
                    let joinDate = userObj.join_date;
                    let lastActivityDate = userObj.last_activity_date;
                    let banned = userObj.banned;
                    let suspended = userObj.suspended;
                    let restricted = userObj.restricted;
                    let disabled = userObj.disabled;
                    let postCount = userObj.post_count;
                    // eslint-disable-next-line max-len
                    let message = `${username}'s Statistics:\nMember Id: ${memberId}\nJoin Date: ${new Date(joinDate * 1000)}\nLast Activity: ${new Date(lastActivityDate * 1000)}\nBanned: ${banned}\nSuspended: ${suspended}\nRestricted: ${restricted}\nDisabled: ${disabled}\nPost Count: ${postCount}`;
                    console.log(message);
                    rl.close();
                });
            } catch (error) {
                console.log("Error: " + error);
            }
            break;
        case "i":
            try {
                rl.question("What is the ID of the user you'd like to lookup? ", async (userId) => {
                    let userObj = await wrapper.members().fetch(userId).catch(e => { console.log(e); });
                    let username = userObj.username;
                    let joinDate = userObj.join_date;
                    let lastActivityDate = userObj.last_activity_date;
                    let banned = userObj.banned;
                    let suspended = userObj.suspended;
                    let restricted = userObj.restricted;
                    let disabled = userObj.disabled;
                    let postCount = userObj.post_count;

                    // eslint-disable-next-line max-len
                    let message = `${userId}'s Statistics:\nUsername: ${username}\nJoin Date: ${new Date(joinDate * 1000)}\nLast Activity: ${new Date(lastActivityDate * 1000)}\nBanned: ${banned}\nSuspended: ${suspended}\nRestricted: ${restricted}\nDisabled: ${disabled}\nPost Count: ${postCount}`;

                    console.log(message);
                    rl.close();
                });
            } catch (error) {
                console.log("ERROR: " + error);
            }
            break;
        default:
            console.log("Invalid Answer");
        }
    });
}

main().catch(error => console.error("ERROR: " + error));