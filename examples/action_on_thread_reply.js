// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = { type: "Private", value: "Find API Key @ https://www.mc-market.org/account/api" };

// We're only listening for a specific thread in this example, but this could be expanded to cover multiple.
let thread_id = 0;

// We're only keeping a store of the last reply ID in memory for this example, but it's likely you'd want to read/write
// this to a secondary data store (ie. a file or database).
let last_reply_id = 0;

async function init() {
  // Initialise wrapper and exit if a failure occurs.
  let init = await wrapper.init(token);
  if (init.result === "error") {
    console.log(init.error);
    process.exit(0);
  }

  // Poll once every hour.
  task();
  setInterval(task, 60 * 60 * 1000);
}

async function task() {
  // Only list replies we haven't taken action on before using the 'list_until' helper function.
  let replies = await wrapper.threads.list_replies_until(thread_id, (reply) => {
    return reply.reply_id > last_reply_id;
  });

  if (replies.result === "error") {
    console.log(replies.error);
    return;
  }

  if (replies.data.length > 0) {
    last_reply_id = replies.data[0].reply_id;

    for (index in replies.data) {
      await on(replies.data[index]);
    }
  }
}

async function on(reply) {
  console.log(reply);
}

init();
