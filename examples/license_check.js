// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = { type: "Private", value: "Find API Key @ https://www.mc-market.org/account/api" };

// Injected placeholders.
let resource_id = "%%__RESOURCE__%%";
let purchaser_id = "%%__USER__%%";
let nonce = "%%__NONCE__%%";
let timestamp = "%%__TIMESTAMP__%%";

async function main() {
  // Initialise wrapper and exit if a failure occurs.
  let init = await wrapper.init(token);
  if (init.result === "error") {
    console.log(init.error);
    process.exit(0);
  }

  let fields = { nonce: nonce, date: timestamp };
  let validated = await wrapper.resources.licenses.fetch_member(
    resource_id,
    purchaser_id,
    fields
  );

  if (validated.result === "error") {
    if (validated.error.code === "ContentNotFoundError") {
      console.log("No license was found for this user. Exiting...");
    } else {
      console.log(
        `Failed to check license due to API Error: ${validated.error}.`
      );
      console.log("Exiting...");
    }

    process.exit(0);
  }

  if (!validated.data.active) {
    console.log("A license has been found, but it's been disabled. Exiting...");
    process.exit(0);
  }

  console.log("Active license found, returning from function without exiting.");
}

main();
