[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / orderNames

# Function: orderNames()

> **orderNames**(`names`, `options`): `string`[]

Defined in: [serialize/normalize.ts:116](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L116)

Re-orders values in a string array, according to user preferences, putting specific strings at the beginning,
others at the end, and optionally sorting the rest of values (in the middle).

## Parameters

### names

`string`[]

= The list of names (strings) to re-order.

### options

[`PropertiesOrderOptions`](../interfaces/PropertiesOrderOptions.md)

Configuration, specifying which properties
should come first, which should come last and how to sort the rest of properties (if at all).

## Returns

`string`[]

A new array, containing values from the names array, ordered according to options.

## Description

This function is intended to help with re-ordering properties of a plain JavaScript object (actually JSON).
Calling this function in loop should work fast enough on a decent amount of records, but it is not optimized for bulk processing.

## Since

0.3.0

## Example

```ts
orderNames(
    ["description", "name", "version", "dependencies", "author", "devDependencies"],
    { first: ["name", "version", "description", "type"], sort: true }
);
// => ["name", "version", "description", "author", "dependencies", "devDependencies"]
```
