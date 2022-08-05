# BuiltByBit's Official Node.js API Wrapper

[![npm](https://img.shields.io/npm/v/@builtbybit/api-wrapper)](https://www.npmjs.com/package/@builtbybit/api-wrapper)
[![npm type definitions](https://img.shields.io/npm/types/@builtbybit/api-wrapper)](https://github.com/BuiltByBit/js-api-wrapper/tree/main/types)
[![npm](https://img.shields.io/npm/dt/@builtbybit/api-wrapper)](https://www.npmjs.com/package/@builtbybit/api-wrapper)
[![npm version](https://img.shields.io/badge/docs-passing-brightgreen)](https://builtbybit.github.io/js-api-wrapper/live/)
[![NPM](https://img.shields.io/npm/l/@builtbybit/api-wrapper)](https://github.com/Majored/@builtbybit/api-wrapper/blob/main/LICENSE)

An official asynchronous Node.js wrapper for BuiltByBit's [Ultimate API](https://builtbybit.com/wiki/ultimate-api/).

- A Promise-based design built upon [`axios`](https://www.npmjs.com/package/axios).
- Stalls requests when a dynamic rate limiting error is encountered.
- Full coverage of the Ultimate API.
- A comprehensive set of relevant usage examples.
- Automatically generated TypeScript declarations.
- Automatically generated and hosted [documentation](https://builtbybit.github.io/js-api-wrapper/live/).

## Installation & Basic Usage

Install via `npm`:

```
npm i @builtbybit/api-wrapper
```

Initialise wrapper and fetch information about yourself via Promise's .then() notation:

```JS
const { Wrapper, Token, TokenType } = require("@builtbybit/api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://builtbybit.com/account/api");
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
const { Wrapper, Token, TokenType } = require("@builtbybit/api-wrapper");

let token = new Token(TokenType.PRIVATE, "Find @ https://builtbybit.com/account/api");
let wrapper = new Wrapper();
...

// Let the caller catch any Promise rejections. Else, use a try-catch block.
await wrapper.init(token);
console.log(await wrapper.members().self());
```

An comprehensive set of [examples](https://github.com/BuiltByBit/js-api-wrapper/tree/main/examples) can be found under the `/examples` directory.

## Contributions

We welcome contributions in the form of bug fixes or otherwise. All pull requests will be reviewed and changes may be requested before merging. Though, please seek advice regarding the introduction of additional features via an issue before working on them - we may have reasons not to introduce the given feature, or may want to introduce it via a different approach.

Whilst no contribution guidelines exist currently, please ensure you:
- Develop with readability in mind.
- Comment appropriately where non-obvious approaches or invariants are being enforced.
- Include documentation comments where appropriate.
- Never regenerate live documentation - this is done upon each version release.
- Regenerate staged documentation via `npm run doc-staged`.
- Regenerate type declarations via `npm run type` if modifying class/function signatures.
- Use `npm run lint` and correct any linting errors within your final commit.

## Issues & Support

The [issues tracker](https://github.com/BuiltByBit/js-api-wrapper/issues) for this repository should only be used to report bugs or issues with this official Node.js wrapper.

For bugs or issues related to the Ultimate API itself, please open a [support ticket](https://builtbybit.com/tickets/new) or create a [bug report](https://builtbybit.com/suggestions/create-thread) on our platform.
