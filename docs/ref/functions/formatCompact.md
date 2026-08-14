[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / formatCompact

# Function: formatCompact()

> **formatCompact**(`value`): `string`

Defined in: [format.ts:44](https://github.com/js-data-tools/js-helpers/blob/master/src/format.ts#L44)

Formats a numeric value, using a compact form (aka "1.2M"), which usually takes not more than 6 symbols.

## Parameters

### value

`number`

The numerical value to format in a compact form.

## Returns

`string`

A compact form of the given number (usually up to 5 characters).

## Since

0.1.2

## Example

```ts
console.log(formatCompact(123)); // => 123
console.log(formatCompact(1200345)); // => 1.2M
```
