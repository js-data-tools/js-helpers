[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / ipv4AsString

# Function: ipv4AsString()

> **ipv4AsString**(`ip`): `string`

Defined in: [convert/ip.ts:27](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/ip.ts#L27)

Converts an IP value to string format.

## Parameters

### ip

`string` \| `number`

## Returns

`string`

A string representation of the specified IP address.

## Since

0.1.2

## Example

```ts
ipv4AsString(3566161419)
// => "212.143.78.11"

ipv4AsString(-1407844352)
// => "172.22.0.0"

ipv4AsString("212.143.78.11")
// => "212.143.78.11"

ipv4AsString("not-ipv4")
// => "not-ipv4" - this method does not validate input
```
