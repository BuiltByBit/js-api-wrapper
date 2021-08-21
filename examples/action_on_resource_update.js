// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

// We're only listening for a specific resource in this example, but this could be expanded to cover multiple.
let resource_id = 0;

// We're only keeping a store of the last update ID in memory for this example, but it's likely you'd want to read/write
// this to a secondary data store (ie. a file or database).
let last_update_id = 0;

async function init() {
  let init = await wrapper.init(token);
  if (init.result === "error") {
    console.log(init.error);
    process.exit(0);
  }

  task();
  setInterval(task, 60 * 60 * 1000);
}

async function task() {
  let updates = await wrapper.resources.updates.list_until(resource_id, function (update) {
    return update.update_id > last_update_id;
  });

  if (updates.result === "error") {
    console.log(updates.error);
    return;
  }

  if (updates.data.length > 0) {
    last_update_id = updates.data[0].update_id;

    for (index in updates.data) {
      await on(updates.data[index]);
    }
  }
}

async function on(update) {
  console.log(update);
}

init();
