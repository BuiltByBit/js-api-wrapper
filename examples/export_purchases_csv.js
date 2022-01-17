// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");
const fs = require("fs")

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

async function main() {
    await run().catch(error => console.log(error.toString()));
}

async function run() {
    await wrapper.init(token);

    let ownedResources = await wrapper.resources().listOwnedAll();
    let fileData = "Resource ID,Purchase ID,Member ID,Renewal,Price,Currency,Date\n";

    for (const rIndex in ownedResources) {
        let resourceId = ownedResources[rIndex]["resource_id"];
        let purchases = await wrapper.resources().purchases().listAll(resourceId);

        for (const pIndex in purchases) {
            let purchaseId = purchases[pIndex]["purchase_id"];
            let memberId = purchases[pIndex]["purchaser_id"];
            let renewal = purchases[pIndex]["renewal"];
            let price = purchases[pIndex]["price"];
            let currency = purchases[pIndex]["currency"];
            let date = purchases[pIndex]["purchase_date"];

            fileData += `${resourceId},${purchaseId},${memberId},${renewal},${price},${currency},${date}\n`;
        }

        console.log(`Fetched all purchases for ${resourceId}.`);
    }

    await fs.promises.writeFile("./purchases.csv", fileData, {encoding: 'utf8'});
    console.log("Done!");
}

main();
