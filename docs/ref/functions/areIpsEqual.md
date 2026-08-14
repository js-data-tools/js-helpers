[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / areIpsEqual

# Function: areIpsEqual()

> **areIpsEqual**(`a`, `b`): `boolean`

Defined in: [convert/ip.ts:93](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/ip.ts#L93)

Checks if two IPv4 values are equal.

## Parameters

### a

[`Ipv4`](../type-aliases/Ipv4.md) \| `null` \| `undefined`

The first IPv4 value to compare. Can also be null or undefined.

### b

[`Ipv4`](../type-aliases/Ipv4.md) \| `null` \| `undefined`

The second IPv4 value to compare. Can also be null or undefined.

## Returns

`boolean`

true if a and b are equal, otherwise false.  This function assumes that null === undefined === ""

## Since

0.1.2

## Example

```ts
areIpsEqual(3566161419, "212.143.78.11")
// => true

areIpsEqual("212.143.78.11", -1407844352)
// => false

areIpsEqual("212.143.78.11", "172.22.0.0")
// => false

areIpsEqual("212.143.78.11", undefined)
// => false
```
