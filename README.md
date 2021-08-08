# MC-Market's Official JS API Wrapper
[![GitHub license](https://img.shields.io/badge/license-MIT-007ec6)](https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)
[![npm version](https://badge.fury.io/js/mcm-js-api-wrapper.svg)](https://badge.fury.io/js/mcm-js-api-wrapper)

An official asynchronous JavaScript (Node.js) wrapper for MC-Market's [Ultimate REST API](https://www.mc-market.org/wiki/ultimate-api/).

* Fully asynchronous design compatible with .then() notation or async/await.
* Dynamically stalls requests when a rate limit is hit.
* A comprehensive set of usage examples.
* Heavily commented making contributions painless.

## Installation & Basic Initialisation
Install via `npm`:
```
npm i mcm-js-api-wrapper
```

Initialise wrapper and fetch information about yourself via Promise's .then() notation:
```JS
const wrapper = require("mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

wrapper.init(token).then(init => {
  if (init.result === "error") {
    console.log(init.error);
    process.exit(0);
  }
}).then(wrapper.members.self().then(self => {
  console.log(self);
}));
```

Initialise wrapper and fetch information about yourself via async/await:
```JS
const wrapper = require("mcm-js-api-wrapper");
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};
...

let build = await wrapper.init(token);
if (build.result === "error") {
  console.log(build.error);
  process.exit(0);
}

console.log(await wrapper.members.self());
```

## Usage
https://github.com/Majored/mcm-js-api-wrapper/blob/main/USAGE.md

## Issues & Support
Whether you're wanting to report a bug you've come across during use of this wrapper or are seeking general help/assistance, please utilise the [issues tracker](https://github.com/Majored/mcm-js-api-wrapper/issues) and tag your issue appropriately during creation.

I try to respond to issues as fast as possible.
