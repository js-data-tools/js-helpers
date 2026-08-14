[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / macAddressAsString

# Function: macAddressAsString()

> **macAddressAsString**(`mac`, `format?`): `string`

Defined in: [convert/mac.ts:30](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/mac.ts#L30)

Converts a MAC address to string, formatting it using the specified delimiter (dash / color / none).

## Parameters

### mac

`string` \| `bigint`

The MAC address to format.

### format?

`""` \| `"-"` \| `":"`

The delimiter to put between MAC address components.

## Returns

`string`

The MAC address, formatted using specified  delimiter.

## Since

0.1.2

## Example

```ts
macAddressAsString(BigInt(45459793942), ":");
// => "00:0a:95:9d:68:16"

macAddressAsString(45459793942n, "-");
// => "00-0a-95-9d-68-16"

macAddressAsString(45459793942n, "");
// => "000a959d6816"

macAddressAsString("00:0a:95:9d:68:16", "-");
// => "00-0a-95-9d-68-16"

macAddressAsString("000a959d6816", ":");
// => "00:0a:95:9d:68:16"
```
