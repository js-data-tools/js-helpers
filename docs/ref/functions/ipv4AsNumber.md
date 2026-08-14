[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / ipv4AsNumber

# Function: ipv4AsNumber()

> **ipv4AsNumber**(`ip`): `number`

Defined in: [convert/ip.ts:59](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/ip.ts#L59)

Converts an IP value to numeric format.

## Parameters

### ip

`string` \| `number`

## Returns

`number`

A numeric representation of the specified IP address.

## Since

0.1.2

## Example

```ts
ipv4AsNumber("212.143.78.11")
// => 3566161419

ipv4AsNumber(-1407844352)
// => -1407844352
```
