# @js-data-tools/js-helpers

A small set of JavaScript / TypeScript helper functions for parsing, converting, transforming and formatting data.

This library was written in TypeScript and compliled in two flavors: CommonJS (for NodeJS applications) and ESM
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