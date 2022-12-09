@js-data-tools/js-helpers / [Exports](modules.md)

# @js-data-tools/js-helpers

[![codecov][codecov-image]][codecov-url]
[![npm][npm-image]][npm-url]

A small set of JavaScript / TypeScript helper functions for parsing, converting, transforming and formatting data.

This library was written in TypeScript and complied in two flavors: CommonJS (for NodeJS applications) and ESM
for front-end applications. The code was not bundled or minified and that was done intentionally, to simplify
tree shaking in consumer projects.

## Installation

Adding this library to your JavaScript / Typescript project is straightforward:

```shell
# Install using npm
npm install @js-data-tools/js-helpers

# Install using yarn
yarn add @js-data-tools/js-helpers

# Install using pnpm
pnpm install @js-data-tools/js-helpers
```

## Usage

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
    return <span>Downloaded {formatSize(size)} </span>;
};
```

## Examples

### Serializing to JSON

Reordering properties in the plain JS objects to make them more readable (in JSON)

```js
const { reorderProperties } = require("@js-data-tools/js-helpers");

const normalized = reorderProperties(
    { version: "1.0.0", name: "js-helpers", author: "Sergey", license: "MIT", main: "index.js", files: ["dist"] },
    { first: ["name", "version"], last: ["license"], sort: true }
);
console.log(JSON.stringify(normalized));
// {"name":"js-helpers","version":"1.0.0","author":"Sergey","files":["dist"],"main":"index.js","license":"MIT"}
```

Removing empty properties (null, undefined, empty string, empty array, empty object literals) to make JSON shorter:

```js
const { ignoreEmpty } = require("@js-data-tools/js-helpers");

const input = { name: "js-helpers", private: false, author: "", files: [], dependencies: {}, devDependencies: undefined };

console.log(JSON.stringify(input));
// {"name":"js-helpers","private":false,"author":"","files":[],"dependencies":{}}

console.log(JSON.stringify(input), ignoreEmpty);
// {"name":"js-helpers","private":false}
```

Removing properties with default values (empty/undefined value or zero or false) to make JSON shorter:

```js
const { ignoreDefaults } = require("@js-data-tools/js-helpers");

const input = { name: "js-helpers", private: false, major: 1, minor: 0, author: "", files: [], dependencies: {}, devDependencies: undefined };

console.log(JSON.stringify(input), ignoreDefaults);
// {"name":"js-helpers","major":1}
```

### Formatting values

```js
const { formatSize, formatCompact, formatDuration } = require("@js-data-tools/js-helpers");

// Format the given size (in bytes) as a compact string with units suffix:
console.log(formatSize(1023456789)); // => 1.02 GB
console.log(formatSize(1023456789, 1024)); // => 976 MiB

// Format a numeric value, using a compact form (aka "1.2M"), which usually takes not more than 6 symbols.
// The main idea is to keep the resulting string bounded to approximately 6 characters
console.log(formatCompact(1200345)); // => 1.2M
console.log(formatCompact(0.128475665)); // => 0.13

// Format duration, measured in milliseconds, as human-friendly string.
// Note: the assumption is that duration is relatively short (less than 2 hours)
console.log(formatDuration(925));       // 925 msec
console.log(formatDuration(53256));     // 53.26 sec
console.log(formatDuration(65256));     // 65 sec
console.log(formatDuration(127874));    // 2 min 8 sec
console.log(formatDuration(180014));    // 3 min
```

### Converting values

Operations on numbers:

```js
const { roundNumber, compactNumber } = require("@js-data-tools/js-helpers");

console.log(roundNumber(3.14159265)); // 3.14
console.log(roundNumber(3.14159265, 4)); // 3.1416

console.log(compactNumber(1234567890)); // [1.23, 3] (e.g. 1.23G)
```

Operations on IPv4 addresses:

```js
const { ipv4AsString, ipv4AsNumber, areIpsEqual } = require("@js-data-tools/js-helpers");

console.log(`ipv4AsNumber("212.143.78.11")=${ipv4AsNumber("212.143.78.11")}`); // 3566161419
console.log(`ipv4AsString(3566161419)=${ipv4AsString(3566161419)}`); // 212.143.78.11
console.log(`areIpsEqual(3566161419, "212.143.78.11")=${areIpsEqual(3566161419, "212.143.78.11")}`); // true
```

Operations on MAC addresses:

```js
const { macAddressAsString, macAddressAsNumber } = require("@js-data-tools/js-helpers");

// Change separator in MAC address:
console.log(macAddressAsString("00:0a:95:9d:68:16", "-")); // "00-0a-95-9d-68-16"
console.log(macAddressAsString("00:0a:95:9d:68:16", "")); // "000a959d6816"

// Converting MAC address from string to number:
console.log(macAddressAsNumber("00:0a:95:9d:68:16")); // 45459793942n

// Converting MAC address from number to string:
console.log(macAddressAsString(45459793942n, ":")); // "00:0a:95:9d:68:16"
```

## Documentation

A reference guide, generated from sources: [Reference Root](docs/ref/modules.md)

[codecov-url]: https://codecov.io/gh/js-data-tools/js-helpers
[codecov-image]: https://codecov.io/gh/js-data-tools/js-helpers/branch/master/graph/badge.svg?token=MZRT5GHT55
[npm-url]: https://www.npmjs.com/package/@js-data-tools/js-helpers
[npm-image]: https://img.shields.io/npm/v/@js-data-tools/js-helpers
