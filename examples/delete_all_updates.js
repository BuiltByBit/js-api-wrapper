// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

let resource_id = 3;

async function main() {
  if (await wrapper.init(token).result === "error") {
    console.log(wrapper.error);
    return;
  }

  let updates = await wrapper.resources.updates.list(resource_id);
  if (updates.result === "error") {
    console.log(updates.error);
    process.exit(0);
  }

  // Loop through and manually delete each update.
  for (index in updates.data) {
    let update_id = updates.data[index].update_id;

    let res = await wrapper.resources.updates.delete(resource_id, update_id);
    if (res.result === "error") {
      console.log(res.error);
      process.exit(0);
    }

    console.log("Successfully deleted update with id: " + update_id);
  }
  console.log("Completed.");
}

main();
