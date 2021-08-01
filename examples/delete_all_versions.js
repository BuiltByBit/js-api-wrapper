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

  let versions = await wrapper.resources.versions.list(resource_id);
  if (versions.result === "error") {
    console.log(versions.error);
    process.exit(0);
  }

  // The current version cannot be deleted so we shift it out of the returned list of versions.
  versions.data.shift();

  // Loop through and manually delete each version.
  for (index in versions.data) {
    let version_id = versions.data[index].version_id;

    let res = await wrapper.resources.versions.delete(resource_id, version_id);
    if (res.result === "error") {
      console.log(res.error);
      process.exit(0);
    }

    console.log("Successfully deleted version with id: " + version_id);
  }
  console.log("Completed.");
}

main();
