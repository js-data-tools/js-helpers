# @js-data-tools/js-helpers

[![codecov][codecov-image]][codecov-url]
[![npm][npm-image]][npm-url]

A small set of JavaScript / TypeScript helper functions for parsing, converting, transforming and formatting data.

This library was written in TypeScript and complied in two flavors: CommonJS (for NodeJS applications) and ESM
for front-end applications. The code was not bundled or minified and that was done intentionally, to simplify
tree shaking in consumer projects.

## Installation and Usage

Adding this library to your JavaScript / Typescript project is straightforward:

```shell
# Install using npm
npm install @js-data-tools/js-helpers

# Install using yarn
yarn add @js-data-tools/js-helpers

# Install using pnpm
pnpm install @js-data-tools/js-helpers
```

Using in Node.js:

```js
const { formatSize } = require("@js-data-tools/js-helpers");

console.log(`Downloaded ${formatSize(1023456789)}`); 
// => Downloaded 1.02 GB
```

Using in React:

```jsx
import { formatSize } from "@js-data-tools/js-helpers";

const FileSize = ({ size: number }) => {
  return (<span>Downloaded {formatSize(size)} </span>);
}
```

## Documentation

A reference guide, generated from sources: [Reference Root](docs/ref/modules.md)

[codecov-url]: https://codecov.io/gh/js-data-tools/js-helpers
[codecov-image]: https://codecov.io/gh/js-data-tools/js-helpers/branch/master/graph/badge.svg?token=MZRT5GHT55
[npm-url]: https://www.npmjs.com/package/@js-data-tools/js-helpers
[npm-image]: https://img.shields.io/npm/v/@js-data-tools/js-helpers
