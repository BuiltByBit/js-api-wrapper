// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const wrapper = require("./mcm-js-api-wrapper");
const token = {
  type: "Private",
  value: "Find API Key @ https://www.mc-market.org/account/api",
};

// We're only listening for a specific resource in this example, but this could be expanded to cover multiple.
let resource_id = 0;

// We're only keeping a store of the last purchase ID in memory for this example, but it's likely you'd want to
// read/write this to a secondary data store (ie. a file or database).
let last_purchase_id = 0;

let pm_title = "Your recent purchase!";
let pm_message = `Hi there,

Thank you for your recent purchase of my resource.

If you need any assistance, don't hesitate to contact me.

Thanks,
- Author`;

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
  let purchases = await wrapper.resources.purchases.list_until(resource_id, (purchase) => {
    return purchase.purchase_id > last_purchase_id;
  });

  if (purchases.result === "error") {
    console.log(purchases.error);
    return;
  }

  if (purchases.data.length > 0) {
    last_purchase_id = purchases.data[0].purchase_id;

    for (index in purchases.data) {
      await on_purchase(purchases.data[index]);
    }
  }
}

async function on_purchase(purchase) {
  let response = await wrapper.conversations.create(pm_title, pm_message, purchase.purchaser_id);

  if (response.result === "success") {
    console.log(`A PM has been sent to user ${purchase.purchaser_id}.`);
  } else {
    console.log(`Unable to create a conversation with user ${purchase.purchaser_id}.`);
    console.log(response.error);
  }
}

init();
