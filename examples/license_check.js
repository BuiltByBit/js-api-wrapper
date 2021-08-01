// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Shared", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

// Injected placeholders.
let resource_id = "%%__RESOURCE__%%";
let purchaser_id = "%%__USER__%%";
let nonce = "%%__NONCE__%%";
let timestamp = "%%__TIMESTAMP__%%";

async function main() {
  if (await wrapper.init(token).result === "error") {
    console.log(wrapper.error);
    return;
  }

  let fields = {nonce: nonce, date: timestamp};
  let validated = await wrapper.resources.licenses.validate(resource_id, purchaser_id, fields);

  if (validated.result === "error") {
    console.log(`Failed to check license due to API Error: ${validated.error}.`);
    console.log("Exiting...");
    process.exit(0);
  }

  if (!validated.data) {
    console.log("No active license was found. Exiting...");
    process.exit(0);
    return;
  }

  if (!validated.data.active) {
    console.log("A license has been found, but it's been disabled. Exiting...");
    process.exit(0);
    return;
  }

  console.log("Active license found, returning from function without exiting.");
}

main();
