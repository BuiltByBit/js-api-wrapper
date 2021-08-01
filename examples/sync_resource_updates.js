// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

const resource_id = 2;
let last_update_id = 0;

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
  let all_updates = [];

  while (has_more) {
    let updates = await wrapper.resources.updates.list(resource_id);
    if (updates.result === "error") {
      console.log(updates.error);
      return;
    }

    for (index in updates.data) {
      let update = updates.data[index];

      if (update.update_id > last_update_id) {
        all_updates.push(update);
      } else {
        has_more = false;
        break;
      }
    }

    if (updates.data.length !== 20) {
      has_more = false;
    }
  }

  if (all_updates.length > 0) {
    last_update_id = all_updates[0].update_id;
    all_updates.reverse();

    for (index in all_updates) {
      let update = all_updates[index];
      console.log(update);
    }
  }

  console.log("Synced resource updates.");
}

init();
