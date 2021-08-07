// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

// A list of member IDs to be alerted about if banned.
let user_list = [1, 2, 3];

// We're only keeping a store of the last ban date in memory for this example, but it's likely you'd want to read/write
// this to a secondary data store (ie. a file or database).
let last_ban_date = 0;

async function init() {
  if (await wrapper.init(token).result === "error") {
    console.log(wrapper.error);
    process.exit(0);
  }

  task();
  setInterval(task, 24 * 60 * 60 * 1000);
}

async function task() {
  let bans = await wrapper.members.bans();

  if (bans.result === "error") {
    console.log(bans.error);
    return;
  }

  bans.data.reverse();

  for (index in bans.data) {
    let ban = bans.data[index];

    if (ban.ban_date > last_ban_date) {
      await on(ban);
      last_ban_date = ban.ban_date;
    } else {
      break;
    }
  }
}

async function on(update) {
  console.log(update);
}

init();
