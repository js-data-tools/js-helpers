[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / macAddressAsNumber

# Function: macAddressAsNumber()

> **macAddressAsNumber**(`mac`): `number` \| `bigint`

Defined in: [convert/mac.ts:109](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/mac.ts#L109)

Converts a MAC address to a number.

## Parameters

### mac

`string` \| `number` \| `bigint`

The MAC address to convert.

## Returns

`number` \| `bigint`

The numeric representation of the given MAC address.  This function returns the input as-is if it is already a number.

## Since

0.1.2

## Example

```ts
macAddressAsNumber("00:0a:95:9d:68:16");
// => 45459793942n

macAddressAsNumber("00-0a-95-9d-68-16");
// => 45459793942n

macAddressAsNumber("000a959d6816");
// => 45459793942n

macAddressAsNumber(45459793942);
// => 45459793942
```
