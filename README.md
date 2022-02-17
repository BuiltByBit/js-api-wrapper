# MC-Market's Official Node.js API Wrapper

[![npm](https://img.shields.io/npm/v/mcm-js-api-wrapper)](https://www.npmjs.com/package/mcm-js-api-wrapper)
[![npm type definitions](https://img.shields.io/npm/types/mcm-js-api-wrapper)](https://github.com/MC-Market-org/js-api-wrapper/tree/main/types)
[![npm](https://img.shields.io/npm/dt/mcm-js-api-wrapper)](https://www.npmjs.com/package/mcm-js-api-wrapper)
[![npm version](https://img.shields.io/badge/docs-passing-brightgreen)](https://mc-market-org.github.io/js-api-wrapper/)
[![NPM](https://img.shields.io/npm/l/mcm-js-api-wrapper)](https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

An official asynchronous Node.js wrapper for MC-Market's [Ultimate API](https://www.mc-market.org/wiki/ultimate-api/).

- A Promise-based design built upon [`axios`](https://www.npmjs.com/package/axios).
- Stalls requests when a dynamic rate limiting error is encountered.
- Full coverage of the Ultimate API.
- A comprehensive set of relevant usage examples.
- Automatically generated TypeScript declarations.
- Automatically generated and hosted [documentation](https://mc-market-org.github.io/js-api-wrapper/).

## Installation & Basic Usage

Install via `npm`:

```
npm i mcm-js-api-wrapper
```

Initialise wrapper and fetch information about yourself via Promise's .then() notation:

```JS
const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();

// We catch any Promise rejections ourselves.
wrapper.init(token).then(wrapper.members().self().then(self => {
    console.log(self);
})).catch(error => {
    console.log("ERROR: " + error);
});
```

Initialise wrapper and fetch information about yourself via async/await:

```JS
const { Wrapper, Token, TokenType } = require("mcm-js-api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://www.mc-market.org/account/api");
let wrapper = new Wrapper();
...

// Let the caller catch any Promise rejections. Else, use a try-catch block.
await wrapper.init(token);
console.log(await wrapper.members().self());
```

An comprehensive set of [examples](https://github.com/MC-Market-org/js-api-wrapper/tree/main/examples) can be found under the `/examples` directory.

## Contributions

We welcome contributions in the form of bug fixes or otherwise. All pull requests will be reviewed and changes may be requested before merging. Though, please seek advice regarding the introduction of additional features via an issue before working on them - we may have reasons not to introduce the given feature, or may want to introduce it via a different approach.

Whilst no contribution guidelines exist currently, please ensure you:
- Develop with readability in mind.
- Comment appropriately where non-obvious approaches or invariants are being enforced.
- Include documentation comments where appropriate.
- Don't regenerate hosted documentation - this will be done upon version release.
- Regenerate TypeScript declarations if modifying class/function signatures.
- Use `eslint` within your final commit.

## Issues & Support

The [issues tracker](https://github.com/MC-Market-org/mcm-js-api-wrapper/issues) for this repository should only be used to report bugs or issues with this official JS wrapper.

For bugs or issues related to the Ultimate API itself, please open a [support ticket](https://www.mc-market.org/tickets/new) or create a [bug report](https://www.mc-market.org/suggestions/create-thread) on our platform.
