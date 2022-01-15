// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");

// Note: A private token could be used but you'd probably ship out publicly and that would risk account compromisation.
const token = {
    type: "Shared",
    value: "Find API Key @ https://www.mc-market.org/account/api",
};

// A list of member IDs to be alerted about if banned.
let user_list = [1, 2, 3];

// We're only keeping a store of the last ban date in memory for this example, but it's likely you'd want to read/write
// this to a secondary data store (ie. a file or database).
let last_ban_date = 0;

async function init() {
    // Initialise wrapper and exit if a failure occurs.
    let init = await wrapper.init(token);
    if (init.result === "error") {
        console.log(init.error);
        process.exit(0);
    }

    // Poll once every 24 hours.
    task();
    setInterval(task, 24 * 60 * 60 * 1000);
}

async function task() {
    let bans = await wrapper.members.bans();

    if (bans.result === "error") {
        console.log(bans.error);
        return;
    }

    // By default, the latest ban is indexed first in the array. We need to reverse it so that we can properly track
    // which bans we have and haven't processed using the 'last_ban_date' variable.
    bans.data.reverse();

    // Loop through all bans, calling the on() function when we encounter a banned member we're wanting to take action
    // on. We break out of the loop once we reach a ban date which is older than the date stored in 'last_ban_date'.
    for (const index in bans.data) {
        let ban = bans.data[index];

        if (ban.ban_date > last_ban_date) {
            if (user_list.includes(ban.member_id)) {
                await on(ban);
            }

            last_ban_date = ban.ban_date;
        } else {
            break;
        }
    }
}

async function on(ban) {
    console.log(ban);
}

init();
