[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / formatSize

# Function: formatSize()

> **formatSize**(`sizeInBytes`, `base?`, `unitNames?`): `string`

Defined in: [format.ts:24](https://github.com/js-data-tools/js-helpers/blob/master/src/format.ts#L24)

Formats a given size (in bytes) as a compact string with units suffix (12345678790 => 1.23 GB).

## Parameters

### sizeInBytes

`number`

The size (in bytes) to format.

### base?

`1000` \| `1024`

The base to use when compacting size.  Can be either 1000 (SI) or 1024 (IEC).

### unitNames?

`string`[]

An optional list of unit names to use. If this parameter is omitted, this function will
automatically use the [SI\_SIZE\_UNITS](../variables/SI_SIZE_UNITS.md) (if the base is 1000) or the [IEC\_SIZE\_UNITS](../variables/IEC_SIZE_UNITS.md)  (if the base is 1024).

## Returns

`string`

A string with a compact version of size (1.27GB)

## Since

0.1.2

## Example

```ts
console.log(formatSize(1023456789));       // => 1.02 GB
console.log(formatSize(1023456789, 1024)); // => 976 MiB
```
