[@js-data-tools/js-helpers](README.md) / Exports

# @js-data-tools/js-helpers

## Table of contents

### progress Classes

- [ProgressReporter](classes/ProgressReporter.md)

### Type Aliases

- [Ipv4](modules.md#ipv4)
- [Predicate](modules.md#predicate)
- [ProgressLogCallback](modules.md#progresslogcallback)

### Variables

- [IEC\_SIZE\_UNITS](modules.md#iec_size_units)
- [NUMERIC\_UNITS](modules.md#numeric_units)
- [SI\_SIZE\_UNITS](modules.md#si_size_units)

### Other Functions

- [areIpsEqual](modules.md#areipsequal)

### convert Functions

- [compactNumber](modules.md#compactnumber)
- [ipv4AsNumber](modules.md#ipv4asnumber)
- [ipv4AsString](modules.md#ipv4asstring)
- [macAddressAsNumber](modules.md#macaddressasnumber)
- [macAddressAsString](modules.md#macaddressasstring)
- [roundNumber](modules.md#roundnumber)

### format Functions

- [formatCompact](modules.md#formatcompact)
- [formatSize](modules.md#formatsize)

### iterable Functions

- [filter](modules.md#filter)
- [filterAsync](modules.md#filterasync)
- [map](modules.md#map)
- [mapAsync](modules.md#mapasync)
- [skipAsync](modules.md#skipasync)
- [skipUntil](modules.md#skipuntil)
- [skipUntilAsync](modules.md#skipuntilasync)
- [skipWhile](modules.md#skipwhile)
- [skipWhileAsync](modules.md#skipwhileasync)
- [take](modules.md#take)
- [takeAsync](modules.md#takeasync)
- [takeUntil](modules.md#takeuntil)
- [takeUntilAsync](modules.md#takeuntilasync)
- [takeWhile](modules.md#takewhile)
- [takeWhileAsync](modules.md#takewhileasync)
- [toArrayAsync](modules.md#toarrayasync)

### iterable
Skip (up to) first N elements of the given iterable collection. Functions

- [skip](modules.md#skip)

### json Functions

- [parseJsonLines](modules.md#parsejsonlines)
- [parseJsonLinesAsync](modules.md#parsejsonlinesasync)
- [toJsonLine](modules.md#tojsonline)

### predicates Functions

- [alwaysTrue](modules.md#alwaystrue)
- [and](modules.md#and)
- [isEmptyArray](modules.md#isemptyarray)
- [isEmptyMap](modules.md#isemptymap)
- [isEmptyObject](modules.md#isemptyobject)
- [isEmptySet](modules.md#isemptyset)
- [isNonEmptyArray](modules.md#isnonemptyarray)
- [isNonEmptyMap](modules.md#isnonemptymap)
- [isNonEmptyObject](modules.md#isnonemptyobject)
- [isNonEmptySet](modules.md#isnonemptyset)
- [isNullOrUndefined](modules.md#isnullorundefined)
- [not](modules.md#not)
- [notNullOrUndefined](modules.md#notnullorundefined)
- [or](modules.md#or)

### progress Functions

- [trackProgressAsync](modules.md#trackprogressasync)

## Type Aliases

### Ipv4

Ƭ **Ipv4**: `string` \| `number`

An IPv4 address, represented either as string ("212.143.78.11") or as a 4-bytes integer (3566161419)

#### Defined in

[convert/ip.ts:6](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/ip.ts#L6)

___

### Predicate

Ƭ **Predicate**<`T`\>: (`value`: `T`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`boolean`

#### Defined in

[predicates.ts:1](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L1)

___

### ProgressLogCallback

Ƭ **ProgressLogCallback**: (`duration`: `number`, `count`: `number`, `rate`: `number`, `completed`: `boolean`) => `void`

#### Type declaration

▸ (`duration`, `count`, `rate`, `completed`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `count` | `number` |
| `rate` | `number` |
| `completed` | `boolean` |

##### Returns

`void`

#### Defined in

[progress.ts:4](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L4)

## Variables

### IEC\_SIZE\_UNITS

• `Const` **IEC\_SIZE\_UNITS**: `string`[]

#### Defined in

[format.ts:4](https://github.com/js-data-tools/js-helpers/blob/e415013/src/format.ts#L4)

___

### NUMERIC\_UNITS

• `Const` **NUMERIC\_UNITS**: `string`[]

#### Defined in

[format.ts:5](https://github.com/js-data-tools/js-helpers/blob/e415013/src/format.ts#L5)

___

### SI\_SIZE\_UNITS

• `Const` **SI\_SIZE\_UNITS**: `string`[]

#### Defined in

[format.ts:3](https://github.com/js-data-tools/js-helpers/blob/e415013/src/format.ts#L3)

## Other Functions

### areIpsEqual

▸ **areIpsEqual**(`a`, `b`): `boolean`

Checks if two IPv4 values are equal.

**`Since`**

1.0.0

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `undefined` \| ``null`` \| [`Ipv4`](modules.md#ipv4) | The first IPv4 value to compare. Can also be null or undefined. |
| `b` | `undefined` \| ``null`` \| [`Ipv4`](modules.md#ipv4) | The second IPv4 value to compare. Can also be null or undefined. |

#### Returns

`boolean`

true if a and b are equal, otherwise false.  This function assumes that null === undefined === ""

#### Defined in

[convert/ip.ts:95](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/ip.ts#L95)

___

## convert Functions

### compactNumber

▸ **compactNumber**(`value`, `maxPower?`, `base?`): [compact: number, power: number]

Converts number to a [compact, power] tuple.  In other words, value = compact * base ^ power.
This format allows formatting given number as a compact string (1234567890 => [1.23, 3] => 1.23G)

**`Since`**

1.0.0

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | The numeric value to convert. |
| `maxPower?` | `number` | `4` | The maximal allowed power of the base (used to make sure we have a unit name for the power) |
| `base?` | `number` | `1000` | The base for the power. |

#### Returns

[compact: number, power: number]

The array, continung two numbers: the compact and power.

#### Defined in

[convert/numeric.ts:47](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/numeric.ts#L47)

___

### ipv4AsNumber

▸ **ipv4AsNumber**(`ip`): `number`

Converts an IP value to numeric format.

**`Since`**

1.0.0

**`Example`**

```ts
ipv4AsNumber("212.143.78.11")
// => 3566161419

ipv4AsNumber(-1407844352)
// => -1407844352
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` \| `number` |

#### Returns

`number`

A numeric represetnation of the specified IP address.

#### Defined in

[convert/ip.ts:61](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/ip.ts#L61)

___

### ipv4AsString

▸ **ipv4AsString**(`ip`): `string`

Converts an IP value to string format.

**`Since`**

1.0.0

**`Example`**

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` \| `number` |

#### Returns

`string`

A string represetnation of the specified IP address.

#### Defined in

[convert/ip.ts:29](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/ip.ts#L29)

___

### macAddressAsNumber

▸ **macAddressAsNumber**(`mac`): `bigint` \| `number`

Converts a MAC address to a number.

**`Since`**

1.0.0

**`Example`**

```ts
macAddressAsNumber("00:0a:95:9d:68:16");
// => bigint(45459793942)

macAddressAsNumber("00-0a-95-9d-68-16");
// => bigint(45459793942)

macAddressAsNumber("000a959d6816");
// => bigint(45459793942)

macAddressAsNumber(45459793942);
// => 45459793942
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mac` | `string` \| `number` \| `bigint` | The MAC address to convert. |

#### Returns

`bigint` \| `number`

The numeric representation of the given MAC address.  This function returns the input as-is if it is already a number.

#### Defined in

[convert/mac.ts:111](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/mac.ts#L111)

___

### macAddressAsString

▸ **macAddressAsString**(`mac`, `format?`): `string`

Converts a MAC address to string, formatting it using the specified delimiter (dash / color / none).

**`Since`**

1.0.0

**`Example`**

```ts
macAddressAsString(BigInt(45459793942), ":");
// => "00:0a:95:9d:68:16"

macAddressAsString(BigInt(45459793942), "-");
// => "00-0a-95-9d-68-16"

macAddressAsString(BigInt(45459793942), "");
// => "000a959d6816"

macAddressAsString("00:0a:95:9d:68:16", "-");
// => "00-0a-95-9d-68-16"

macAddressAsString("000a959d6816", ":");
// => "00:0a:95:9d:68:16"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mac` | `string` \| `bigint` | The MAC address to format. |
| `format?` | ``""`` \| ``"-"`` \| ``":"`` | The delimiter to put between MAC address components. |

#### Returns

`string`

The MAC address, formatted using specified  delimiter.

#### Defined in

[convert/mac.ts:32](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/mac.ts#L32)

___

### roundNumber

▸ **roundNumber**(`value`, `maxDecimalDigits?`): `number`

Rounds the given number to have at most <n> decimal digits.

**`Since`**

1.0.0

**`Example`**

```ts
console.log(roundNumber(3.14159265));    // 3.14
console.log(roundNumber(3.14159265, 4)); // 3.1416
console.log(roundNumber(-2.246));        // -2.25
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | The numeric value to round |
| `maxDecimalDigits?` | `number` | `2` | The maximal number of decimal digits to keep.  Negative or undefined value means "do not round". |

#### Returns

`number`

The given number, rounded to the requested number of decimal digits.

#### Defined in

[convert/numeric.ts:18](https://github.com/js-data-tools/js-helpers/blob/e415013/src/convert/numeric.ts#L18)

___

## format Functions

### formatCompact

▸ **formatCompact**(`value`): `string`

Formats a numeric value, using a compact form , adding the K/M/G/T/P suffix if needed.

**`Since`**

1.0.0

**`Example`**

```ts
console.log(formatCompact(123)); // => 123
console.log(formatCompact(1200345)); // => 1.2M
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The numerical value to format as a compact string. |

#### Returns

`string`

A string with a compact version of the given number.

#### Defined in

[format.ts:43](https://github.com/js-data-tools/js-helpers/blob/e415013/src/format.ts#L43)

___

### formatSize

▸ **formatSize**(`sizeInBytes`, `base?`, `unitNames?`): `string`

Formats a given size (in bytes) as a compact string with units suffix (12345678790 => 1.23 GB).

**`Since`**

1.0.0

**`Example`**

```ts
console.log(formatSize(1023456789));       // => 1.02 GB
console.log(formatSize(1023456789, 1024)); // => 976 MiB
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sizeInBytes` | `number` | `undefined` | The size (in bytes) to format |
| `base?` | ``1000`` \| ``1024`` | `1000` | The base to use when compacting size.  Can be either 1000 (SI) or 1024 (IEC). |
| `unitNames?` | `string`[] | `undefined` | An optional list of unit names to use. |

#### Returns

`string`

A string with a compact version of size (1.27GB)

#### Defined in

[format.ts:23](https://github.com/js-data-tools/js-helpers/blob/e415013/src/format.ts#L23)

___

## iterable Functions

### filter

▸ **filter**<`T`\>(`from`, `predicate?`): `Iterable`<`T`\>

Filter elements of the given iterable collection, using given predicate function.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to filter elements of. |
| `predicate?` | ``null`` \| (`item`: `T`) => `boolean` | The predicate function, receiving a single collection's element as a parameter and returning true to keep that element (or false to skip it) |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:9](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L9)

___

### filterAsync

▸ **filterAsync**<`T`\>(`from`, `predicate?`): `AsyncIterable`<`T`\>

Filter elements of the given iterable collection, using given predicate function.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to filter elements of. |
| `predicate?` | ``null`` \| (`item`: `T`) => `boolean` | The predicate function, receiving a single collection's element as a parameter and returning true to keep that element (or false to skip it) |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:161](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L161)

___

### map

▸ **map**<`T`, `U`\>(`source`, `transform`): `Iterable`<`U`\>

Create a transforming proxy for synchronous stream of values (iterable collection).

**`Description`**

This function by itself does not iterate the source collection, it just creates a wrapper iterator.
When caller asks for the next entry, the wrapper iterator delegates the call to the internal (source) iterator,
then applies the given transformation function on that entry and returns the transformation result to caller.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Iterable`<`T`\> | The source iterable collection |
| `transform` | (`item`: `T`) => `U` | The callback function that will transform entries of the source collection to the desired format. |

#### Returns

`Iterable`<`U`\>

A new iterable stream of transformed values.

#### Defined in

[iterable/map.ts:33](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/map.ts#L33)

___

### mapAsync

▸ **mapAsync**<`T`, `U`\>(`source`, `transform`): `AsyncIterable`<`U`\>

Create a transforming proxy for asynchronous stream of values.

**`Description`**

This function by itself does not iterate the source collection, it just creates a wrapper iterator.
When caller asks for the next entry, the wrapper iterator delegates the call to the internal (source) iterator,
then applies the given transformation function on that entry and returns the transformation result to caller.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `AsyncIterable`<`T`\> | The source asynchronous iterable stream of values (generator or some other source). |
| `transform` | (`item`: `T`) => `U` | The callback function that will transform entries of the source collection to the desired format. |

#### Returns

`AsyncIterable`<`U`\>

A new iterable stream of transformed values (asynchronous).

#### Defined in

[iterable/map.ts:14](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/map.ts#L14)

___

### skipAsync

▸ **skipAsync**<`T`\>(`from`, `count`): `AsyncIterable`<`T`\>

Skip (up to) first N elements of the given iterable collection.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to skip elements of. |
| `count` | `number` | The number of elements to skip |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:248](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L248)

___

### skipUntil

▸ **skipUntil**<`T`\>(`from`, `condition`): `Iterable`<`T`\>

Skip first elements of the iterable collection until one of them matches a given condition.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to skip elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate function, getting a collection's element and returning false if element should be skipped (true to stop skipping and return the rest) |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:149](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L149)

___

### skipUntilAsync

▸ **skipUntilAsync**<`T`\>(`from`, `condition`): `AsyncIterable`<`T`\>

Skip first elements of the iterable collection until one of them matches a given condition.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to skip elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate function, getting a collection's element and returning false if element should be skipped (true to stop skipping and return the rest) |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:301](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L301)

___

### skipWhile

▸ **skipWhile**<`T`\>(`from`, `condition`): `Iterable`<`T`\>

Skip first elements of the iterable collection, while they match a given condition.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to skip elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate function, getting a collection's element and returning true if element should be skipped (false to stop skipping and return the rest) |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:119](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L119)

___

### skipWhileAsync

▸ **skipWhileAsync**<`T`\>(`from`, `condition`): `AsyncIterable`<`T`\>

Skip first elements of the iterable collection, while they match a given condition.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to skip elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate function, getting a collection's element and returning true if element should be skipped (false to stop skipping and return the rest) |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:271](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L271)

___

### take

▸ **take**<`T`\>(`from`, `count`): `Iterable`<`T`\>

Take (up to) first N elements of the given iterable collection.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to take elements of. |
| `count` | `number` | The number of elements to take |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:33](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L33)

___

### takeAsync

▸ **takeAsync**<`T`\>(`from`, `count`): `AsyncIterable`<`T`\>

Take (up to) first N elements of the given iterable collection.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to take elements of. |
| `count` | `number` | The number of elements to take |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:185](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L185)

___

### takeUntil

▸ **takeUntil**<`T`\>(`from`, `condition`): `Iterable`<`T`\>

Enumerate elements of the given iterable collection, until some element satisfies the given condition (predicate).

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to take elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate, takign a collection's element as a parameter and returning false to stop enumeration. |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:84](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L84)

___

### takeUntilAsync

▸ **takeUntilAsync**<`T`\>(`from`, `condition`): `AsyncIterable`<`T`\>

Enumerate elements of the given iterable collection, until some element satisfies the given condition (predicate).

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to take elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate, takign a collection's element as a parameter and returning false to stop enumeration. |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:236](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L236)

___

### takeWhile

▸ **takeWhile**<`T`\>(`from`, `condition`): `Iterable`<`T`\>

Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to take elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate, takign a collection's element as a parameter and returning false to stop enumeration. |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:57](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L57)

___

### takeWhileAsync

▸ **takeWhileAsync**<`T`\>(`from`, `condition`): `AsyncIterable`<`T`\>

Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `AsyncIterable`<`T`\> | The enumerable collection to take elements of. |
| `condition` | `undefined` \| ``null`` \| (`item`: `T`) => `boolean` | The predicate, takign a collection's element as a parameter and returning false to stop enumeration. |

#### Returns

`AsyncIterable`<`T`\>

#### Defined in

[iterable/select.ts:209](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L209)

___

### toArrayAsync

▸ **toArrayAsync**<`T`\>(`source`, `target?`): `Promise`<`T`[]\>

Reads all values from the asynchronous stream (iterable) and stores them in the array.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `AsyncIterable`<`T`\> | An async stream of values to iterate. |
| `target?` | `T`[] | Reference to the array to append values to.  A new arrray will be created if this parameter is null or omitted. |

#### Returns

`Promise`<`T`[]\>

A promise for the resulting array.

#### Defined in

[iterable/toArray.ts:10](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/toArray.ts#L10)

___

## iterable
Skip (up to) first N elements of the given iterable collection. Functions

### skip

▸ **skip**<`T`\>(`from`, `count`): `Iterable`<`T`\>

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable collection to skip elements of. |
| `count` | `number` | The number of elements to skip |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:96](https://github.com/js-data-tools/js-helpers/blob/e415013/src/iterable/select.ts#L96)

___

## json Functions

### parseJsonLines

▸ **parseJsonLines**<`T`\>(`textLines`, `reviver?`): `Iterable`<`T`\>

Parses an NDJSON stream

**`Since`**

1.0.0

**`See`**

JSON.parse)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textLines` | `Iterable`<`string`\> | The enumerable collection of text lines to parse - every entry is supposed to be a valid JSON text to parse |
| `reviver?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | An optional reviver object (see |

#### Returns

`Iterable`<`T`\>

The iterable collection of parsed objects (optimized for streaming)

#### Defined in

[json/json-lines.ts:13](https://github.com/js-data-tools/js-helpers/blob/e415013/src/json/json-lines.ts#L13)

___

### parseJsonLinesAsync

▸ **parseJsonLinesAsync**<`T`\>(`textLines`, `reviver?`): `AsyncIterable`<`T`\>

Parses an asynchronous NDJSON stream

**`Since`**

1.0.0

**`See`**

JSON.parse)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textLines` | `AsyncIterable`<`string`\> | Enumerable collection of text lines to parse (async) - every entry is supposed to be a valid JSON text to parse |
| `reviver?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | An optional reviver object (see |

#### Returns

`AsyncIterable`<`T`\>

The iterable collection of parsed objects (optimized for streaming)

#### Defined in

[json/json-lines.ts:27](https://github.com/js-data-tools/js-helpers/blob/e415013/src/json/json-lines.ts#L27)

___

### toJsonLine

▸ **toJsonLine**(`value`): `string`

Renders a given value as JSON line (NDJSON format)

**`Since`**

1.0.0

**`Example`**

toJsonLine([
  {
    name: "John",
    age: 23,
    male: true
  },
  {
    name: "Mary",
    age: 21
  }
]);

// => `[{"name":"John","age":23,"male":true},{"name":"Mary","age":21}]`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to render as a JSON line |

#### Returns

`string`

A string with JSON representation of the given value (no whitespaces or line breaks in the middle), followed by a line break.

#### Defined in

[json/json-lines.ts:54](https://github.com/js-data-tools/js-helpers/blob/e415013/src/json/json-lines.ts#L54)

___

## predicates Functions

### alwaysTrue

▸ **alwaysTrue**<`T`\>(`input`): `boolean`

A predicate, always returning true, regardless of the input value.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `T` | The input value (ignored) |

#### Returns

`boolean`

true

#### Defined in

[predicates.ts:16](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L16)

___

### and

▸ **and**<`T`\>(...`predicates`): [`Predicate`](modules.md#predicate)<`T`\>

Composes a predicate, which will check if given value satisfies all inner conditions.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...predicates` | (`undefined` \| ``null`` \| [`Predicate`](modules.md#predicate)<`T`\>)[] | A list of functions, checking the "inner" conditions.  The "outer" predicate will return true if and only if all inner conditions are true. |

#### Returns

[`Predicate`](modules.md#predicate)<`T`\>

A new [Predicate](modules.md#predicate), which evaluate given conditions on an input value and return true if all conditions are met.

#### Defined in

[predicates.ts:170](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L170)

___

### isEmptyArray

▸ **isEmptyArray**<`T`\>(`input`): `boolean`

Checks if given array is null / undefined or contains no elements

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T`[] | An array to inspect |

#### Returns

`boolean`

true if given set is null, undefined or contains no elements.

#### Defined in

[predicates.ts:52](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L52)

___

### isEmptyMap

▸ **isEmptyMap**<`K`, `V`\>(`input`): `boolean`

Checks if given map is null / undefined or contains no elements

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `Map`<`K`, `V`\> | A map to inspect |

#### Returns

`boolean`

true if given map is null, undefined or contains no elements.

#### Defined in

[predicates.ts:100](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L100)

___

### isEmptyObject

▸ **isEmptyObject**<`T`\>(`input`): `boolean`

Checks if given object is null / undefined or contains no public properties.

**`Since`**

1.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | An object to inspect. |

#### Returns

`boolean`

true if given object is null, undefined or contains no properties.

#### Defined in

[predicates.ts:124](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L124)

___

### isEmptySet

▸ **isEmptySet**<`T`\>(`input`): `boolean`

Checks if given set is null / undefined or contains no elements

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `Set`<`T`\> | A set to inspect |

#### Returns

`boolean`

true if given set is null, undefined or contains no elements.

#### Defined in

[predicates.ts:76](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L76)

___

### isNonEmptyArray

▸ **isNonEmptyArray**<`T`\>(`input`): `boolean`

Checks if given array is not null / undefined and contains at least one element.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T`[] | An array to inspect |

#### Returns

`boolean`

true if given array exists (not null / undefined) and contains at least one element.

#### Defined in

[predicates.ts:64](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L64)

___

### isNonEmptyMap

▸ **isNonEmptyMap**<`K`, `V`\>(`input`): `boolean`

Checks if given map is not null / undefined and contains at least one element.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `Map`<`K`, `V`\> | A map to inspect |

#### Returns

`boolean`

true if given map exists (not null / undefined) and contains at least one element.

#### Defined in

[predicates.ts:112](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L112)

___

### isNonEmptyObject

▸ **isNonEmptyObject**<`T`\>(`input`): `boolean`

Checks if given object is not null / undefined and contains at least one public property.

**`Since`**

1.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | An object to inspect. |

#### Returns

`boolean`

true if given object is not null / undefined and contains at least one property.

#### Defined in

[predicates.ts:136](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L136)

___

### isNonEmptySet

▸ **isNonEmptySet**<`T`\>(`input`): `boolean`

Checks if given set is not null / undefined and contains at least one element.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `Set`<`T`\> | A set to inspect |

#### Returns

`boolean`

true if given set exists (not null / undefined) and contains at least one element.

#### Defined in

[predicates.ts:88](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L88)

___

### isNullOrUndefined

▸ **isNullOrUndefined**<`T`\>(`input`): `boolean`

Checks if given value is null or undefined

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | A value to inspect |

#### Returns

`boolean`

true if the input value is null or undefined, otherwise false.

#### Defined in

[predicates.ts:28](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L28)

___

### not

▸ **not**<`T`\>(`predicate`): [`Predicate`](modules.md#predicate)<`T`\>

Composes a predicate, which will negate the given one.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](modules.md#predicate)<`T`\> | The "inner" predicate to negate. |

#### Returns

[`Predicate`](modules.md#predicate)<`T`\>

A new [Predicate](modules.md#predicate), which evaluate the given condition and return the negated value (e.g. false if inner condition is true and vice versa).

#### Defined in

[predicates.ts:208](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L208)

___

### notNullOrUndefined

▸ **notNullOrUndefined**<`T`\>(`input`): `boolean`

Checks if given value is not null and not undefined

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | A value to inspect |

#### Returns

`boolean`

false if the input value is null or undefined, otherwise true.

#### Defined in

[predicates.ts:40](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L40)

___

### or

▸ **or**<`T`\>(...`predicates`): [`Predicate`](modules.md#predicate)<`T`\>

Composes a predicate, which will check if given value satisfies at least one of inner conditions.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...predicates` | (`undefined` \| ``null`` \| [`Predicate`](modules.md#predicate)<`T`\>)[] | A list of functions, checking the "inner" conditions.  The "outer" predicate will return true if at least one of inner conditions is met. |

#### Returns

[`Predicate`](modules.md#predicate)<`T`\>

A new [Predicate](modules.md#predicate), which evaluate given conditions on an input value and return true if at least one of inner conditions is met.

#### Defined in

[predicates.ts:189](https://github.com/js-data-tools/js-helpers/blob/e415013/src/predicates.ts#L189)

___

## progress Functions

### trackProgressAsync

▸ **trackProgressAsync**<`T`\>(`source`, `report?`): `AsyncIterable`<`T`\>

Wraps given async iterable with a progress monitor, reporting how many items were processed so far (once a second).

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `AsyncIterable`<`T`\> | The iterable collection to monitor the progress of iteration (consumption) for. |
| `report?` | [`ProgressReporter`](classes/ProgressReporter.md) \| [`ProgressLogCallback`](modules.md#progresslogcallback) | Either the callback function for reporting a progress or an instance of ProgressReporter. |

#### Returns

`AsyncIterable`<`T`\>

A new async iterable, monitoring the progress of the iteration.

#### Defined in

[progress.ts:111](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L111)
