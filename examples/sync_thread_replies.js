// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

const thread_id = 2;
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
  let has_more = true;
  let all_replies = [];
  let sort_options = {page: 1};

  while (has_more) {
    let replies = await wrapper.threads.list_replies(thread_id, sort_options);
    if (replies.result === "error") {
      console.log(replies.error);
      return;
    }

    for (index in replies.data) {
      let reply = replies.data[index];

      if (reply.reply_id > last_post_id) {
        all_replies.push(reply);
      } else {
        has_more = false;
        break;
      }
    }

    if (replies.data.length !== 20) {
      has_more = false;
    }

    sort_options.page++;
  }

  if (all_replies.length > 0) {
    last_post_id = all_replies[0].reply_id;
    all_replies.reverse();

    for (index in all_replies) {
      let reply = all_replies[index];
      console.log(reply.message);
    }
  }

  console.log("Synced thread replies.");
}

init();
