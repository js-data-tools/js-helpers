[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / reorderProperties

# Function: reorderProperties()

> **reorderProperties**\<`T`\>(`source`, `options`, `inplace?`): `Record`\<`string`, `T`\>

Defined in: [serialize/normalize.ts:161](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L161)

Re-orders properties of the given JS plain object (containing only string keys) - useful for serializing to JSON.

## Type Parameters

### T

`T` = `unknown`

## Parameters

### source

`Record`\<`string`, `T`\>

The source object to re-order properties of.

### options

[`PropertiesOrderOptions`](../interfaces/PropertiesOrderOptions.md)

The configuration, specifying which properties should come first, which should come last and whether to sort the rest of properties.

### inplace?

`boolean`

A boolean flag, specifying whether changes should be performed on the source object itself (expensive) or on a cloned copy.

## Returns

`Record`\<`string`, `T`\>

An object with re-ordered properties.  If inplace is set to true, function returns reference to source.
If inplace is set to false, then the return value is a new object with properties, copied from source.  If inplace
is undefined, then the return value can be either source or its clone (depending on options).

## Since

0.3.0

## Example

```ts
const normalized = reorderProperties(
    { version: "1.0.0", name: "js-helpers", author: "Sergey", license: "MIT", main: "index.js", files: ["dist"] },
    { first: ["name", "version"], last: ["license"], sort: true }
);

console.log(JSON.stringify(normalized));
// => {"name":"js-helpers","version":"1.0.0","author":"Sergey","files":["dist"],"main":"index.js","license":"MIT"}
```
