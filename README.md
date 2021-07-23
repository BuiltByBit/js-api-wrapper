# MC-Market Official JavaScript API Wrapper
[![Documentation Status](https://img.shields.io/badge/docs-1.0.0-4d76ae)](https://majored.pw/docs)
[![GitHub license](https://img.shields.io/badge/license-MIT-007ec6)](https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

An official asynchronous JavaScript (Node.js) wrapper for MC-Market's HTTP API (https://www.mc-market.org/wiki/ultimate-api/).

* Full coverage of the API with a fully asynchronous design.

## Installation & Usage

---

Async/await:
```JS
let mcm_api_wrapper = require('../mcm-js-api-wrapper');
...

let wrapper = await mcm_api_wrapper.init({
  type: "Private",
  value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"
});

if (wrapper.result === "error") {
  console.log(wrapper.error);
  return;
}

console.log(await wrapper.members.self());
```

## Issues & Support
Whether you're wanting to report a bug you've come across during use of this wrapper or are seeking general help/assistance, please utilise the [issues tracker](https://github.com/Majored/mcm-js-api-wrapper/issues) and tag your issue appropriately during creation.

I try to respond to issues as fast as possible.
