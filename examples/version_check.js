// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

const wrapper = require("../mcm-js-api-wrapper");
const token = {type: "Shared", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

// Injected placeholders.
let resource_id = "%%__RESOURCE__%%";
let version_id = "%%__VERSION__%%";

async function main() {
  let init = await wrapper.init(token);
  if (init.result === "error") {
    console.log(init.error);
    process.exit(0);
  }

  let latest = await wrapper.resources.versions.latest(resource_id);

  if (latest.result === "error") {
    console.log(`Failed to check latest version due to API Error: ${latest.error}.`);
    console.log("Exiting...");
    process.exit(0);
  }

  if (Number(version_id) === latest.version_id) {
    console.log("Up to date.");
  } else {
    console.log("A new version exists. https://www.mc-market.org/resources/" + resource_id);
  }
}

main();
