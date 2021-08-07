// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

// We're only listening for a specific thread in this example, but this could be expanded to cover multiple.
let thread_id = 0;

// We're only keeping a store of the last post ID in memory for this example, but it's likely you'd want to read/write
// this to a secondary data store (ie. a file or database).
let last_post_id = 0;

async function init() {
  if (await wrapper.init(token).result === "error") {
    console.log(wrapper.error);
    process.exit(0);
  }

  task();
  setInterval(task, 60 * 60 * 1000);
}

async function task() {
  let replies = await wrapper.thread.list_replies_until(thread_id, function (post) {
    return post.reply_id > last_post_id;
  });

  if (replies.result === "error") {
    console.log(replies.error);
    return;
  }

  if (replies.data.length > 0) {
    last_post_id = replies.data[0].reply_id;

    for (index in replies.data) {
      await on(replies.data[index]);
    }
  }
}

async function on(reply) {
  console.log(reply);
}

init();
