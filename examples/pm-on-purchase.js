// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

// We're only listening for a specific resource in this example, but this could be expanded to cover multiple.
let resourceId = 0;

// We're only keeping a store of the last purchase ID in memory for this example, but it's likely you'd want to
// read/write this to a secondary data store (ie. a file or database).
let lastPurchaseId = 0;

let pmTitle = "Your recent purchase!";
let pmMessage = `Hi there,

Thank you for your recent purchase of my resource.

If you need any assistance, don't hesitate to contact me.

Thanks,
- Author`;

async function main() {
    await wrapper.init(token);

    // Poll once every hour.
    task();
    setInterval(task, 60 * 60 * 1000);
}

async function task() {
    let purchases = await wrapper.resources().purchases().listUntil(resourceId, (purchase) => {
        return purchase["purchase_id"] > lastPurchaseId;
    });

    if (purchases.length > 0) {
        lastPurchaseId = purchases[0]["purchase_id"];

        for (const index in purchases) {
            await onPurchase(purchases[index]);
        }
    }
}

async function onPurchase(purchase) {
    await wrapper.conversations().create(pmTitle, pmMessage, purchase["purchaser_id"]);
    console.log(`A PM has been sent to user ${purchase["purchaser_id"]}.`);
}

main().catch(error => console.error("ERROR: " + error));
