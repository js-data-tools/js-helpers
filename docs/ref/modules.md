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

[convert/ip.ts:6](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/ip.ts#L6)

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

[predicates.ts:1](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L1)

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

[progress.ts:4](https://github.com/js-data-tools/js-helpers/blob/290463f/src/progress.ts#L4)

## Variables

### IEC\_SIZE\_UNITS

• `Const` **IEC\_SIZE\_UNITS**: `string`[]

#### Defined in

[format.ts:4](https://github.com/js-data-tools/js-helpers/blob/290463f/src/format.ts#L4)

___

### NUMERIC\_UNITS

• `Const` **NUMERIC\_UNITS**: `string`[]

#### Defined in

[format.ts:5](https://github.com/js-data-tools/js-helpers/blob/290463f/src/format.ts#L5)

___

### SI\_SIZE\_UNITS

• `Const` **SI\_SIZE\_UNITS**: `string`[]

#### Defined in

[format.ts:3](https://github.com/js-data-tools/js-helpers/blob/290463f/src/format.ts#L3)

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

[convert/ip.ts:95](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/ip.ts#L95)

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

[convert/numeric.ts:47](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/numeric.ts#L47)

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

[convert/ip.ts:61](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/ip.ts#L61)

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

[convert/ip.ts:29](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/ip.ts#L29)

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

[convert/mac.ts:111](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/mac.ts#L111)

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

[convert/mac.ts:32](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/mac.ts#L32)

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

[convert/numeric.ts:18](https://github.com/js-data-tools/js-helpers/blob/290463f/src/convert/numeric.ts#L18)

___

## format Functions

### formatCompact

▸ **formatCompact**(`value`): `string`

Formats a numeric value, using a compact form (aka "1.2M"), which usually takes not more than 6 symbols.

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
| `value` | `number` | The numerical value to format in a compact form. |

#### Returns

`string`

A compact form of the given number (usually up to 5 characters).

#### Defined in

[format.ts:44](https://github.com/js-data-tools/js-helpers/blob/290463f/src/format.ts#L44)

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
| `sizeInBytes` | `number` | `undefined` | The size (in bytes) to format. |
| `base?` | ``1000`` \| ``1024`` | `1000` | The base to use when compacting size.  Can be either 1000 (SI) or 1024 (IEC). |
| `unitNames?` | `string`[] | `undefined` | An optional list of unit names to use. If this parameter is omitted, this function will   automatically use the [SI_SIZE_UNITS](modules.md#si_size_units) (if the base is 1000) or the [IEC_SIZE_UNITS](modules.md#iec_size_units)  (if the base is 1024). |

#### Returns

`string`

A string with a compact version of size (1.27GB)

#### Defined in

[format.ts:24](https://github.com/js-data-tools/js-helpers/blob/290463f/src/format.ts#L24)

___

## iterable Functions

### filter

▸ **filter**<`T`\>(`from`, `predicate?`): `Iterable`<`T`\>

Filter elements of the iterable collection, using the given predicate function.

**`Description`**

This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
iterator, skipping values that do not pass the given filter.

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

A new iterable object, which, when iterated, will return elements from the inner collection, filtered with the given predicate (e.g. only 
those that the predicate returns true for them)

#### Defined in

[iterable/select.ts:15](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L15)

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

[iterable/select.ts:178](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L178)

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

[iterable/map.ts:33](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/map.ts#L33)

___

### mapAsync

▸ **mapAsync**<`T`, `U`\>(`source`, `transform`): `AsyncIterable`<`U`\>

Create a transforming proxy for asynchronous stream of values.

**`Description`**

This function does not iterate the source collection by itself, it just creates a wrapper iterator.
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

[iterable/map.ts:14](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/map.ts#L14)

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

[iterable/select.ts:265](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L265)

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

[iterable/select.ts:166](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L166)

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

[iterable/select.ts:318](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L318)

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

[iterable/select.ts:136](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L136)

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

[iterable/select.ts:288](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L288)

___

### take

▸ **take**<`T`\>(`from`, `count`): `Iterable`<`T`\>

Take (up to) first N elements of the given iterable collection.

**`Description`**

This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
iterator up to <N> times and then stops the enumeration as if the original iterator reached the end of the sequence.

**`Since`**

1.0.0

**`Retuns`**

A new iterable object, which, when iterated, will return the first <count> elements from the source collection (or less 
is the source collection is shorter than <count>).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `undefined` \| ``null`` \| `Iterable`<`T`\> | The enumerable object to take elements of. |
| `count` | `number` | The number of elements to take.  A negative count stands for "take all elements". |

#### Returns

`Iterable`<`T`\>

#### Defined in

[iterable/select.ts:45](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L45)

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

[iterable/select.ts:202](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L202)

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

[iterable/select.ts:101](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L101)

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

[iterable/select.ts:253](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L253)

___

### takeWhile

▸ **takeWhile**<`T`\>(`from`, `condition`): `Iterable`<`T`\>

Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).

**`Description`**

This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
iterator.  It checks every element using the given predicate and stops the enumeration when predicate returns false.

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

A new enuemrable objects, which will return first elements of the source collection, which all satisfy the given condition.

#### Defined in

[iterable/select.ts:74](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L74)

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

[iterable/select.ts:226](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L226)

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

[iterable/toArray.ts:10](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/toArray.ts#L10)

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

[iterable/select.ts:113](https://github.com/js-data-tools/js-helpers/blob/290463f/src/iterable/select.ts#L113)

___

## json Functions

### parseJsonLines

▸ **parseJsonLines**<`T`\>(`textLines`, `reviver?`): `Iterable`<`T`\>

Parses an NDJSON stream

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textLines` | `Iterable`<`string`\> | The enumerable collection of text lines to parse - every entry is supposed to be a valid JSON text to parse |
| `reviver?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | An optional reviver object (see JSON#parse) |

#### Returns

`Iterable`<`T`\>

An iterable collection of parsed values.

#### Defined in

[json/json-lines.ts:13](https://github.com/js-data-tools/js-helpers/blob/290463f/src/json/json-lines.ts#L13)

___

### parseJsonLinesAsync

▸ **parseJsonLinesAsync**<`T`\>(`textLines`, `reviver?`): `AsyncIterable`<`T`\>

Parses an asynchronous NDJSON stream

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textLines` | `AsyncIterable`<`string`\> | The enumerable async stream of text lines to parse - every entry is supposed to be a valid JSON. |
| `reviver?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | An optional reviver object (see JSON#parse) |

#### Returns

`AsyncIterable`<`T`\>

An iterable asynchronous stream of parsed values.

#### Defined in

[json/json-lines.ts:27](https://github.com/js-data-tools/js-helpers/blob/290463f/src/json/json-lines.ts#L27)

___

### toJsonLine

▸ **toJsonLine**(`value`): `string`

Render the given value as an NDJSON entry: a JSON without whitespaces, followed by a line break.

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
| `value` | `unknown` | The value to render as an NDJSON (JSON line). |

#### Returns

`string`

A string with JSON representation of the given value (no whitespaces or line breaks in the middle), followed by a line break.

#### Defined in

[json/json-lines.ts:54](https://github.com/js-data-tools/js-helpers/blob/290463f/src/json/json-lines.ts#L54)

___

## predicates Functions

### alwaysTrue

▸ **alwaysTrue**<`T`\>(`input`): `boolean`

A predicate function, always returning true, regardless of the input value.

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

[predicates.ts:16](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L16)

___

### and

▸ **and**<`T`\>(...`predicates`): [`Predicate`](modules.md#predicate)<`T`\>

Creates a new predicate function, checking if an input value satisfies all given conditions (a logical AND between other predicates).

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...predicates` | (`undefined` \| ``null`` \| [`Predicate`](modules.md#predicate)<`T`\>)[] | The list of condition functions to combine with a logical AND. |

#### Returns

[`Predicate`](modules.md#predicate)<`T`\>

A new [Predicate](modules.md#predicate), which returns true if all inner conditions are met for the given input value.

#### Defined in

[predicates.ts:152](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L152)

___

### isEmptyArray

▸ **isEmptyArray**<`T`\>(`input`): `boolean`

Check if the given array is null / undefined or contains no elements.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T`[] | The array object to inspect. |

#### Returns

`boolean`

true if the given array is null, undefined or contains no elements.

#### Defined in

[predicates.ts:52](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L52)

___

### isEmptyMap

▸ **isEmptyMap**<`K`, `V`\>(`input`): `boolean`

Check if the given map is null / undefined or contains no elements.

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
| `input` | `undefined` \| ``null`` \| `Map`<`K`, `V`\> | The map object to inspect. |

#### Returns

`boolean`

true if the given map object is null, undefined or contains no elements.

#### Defined in

[predicates.ts:100](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L100)

___

### isEmptyObject

▸ **isEmptyObject**<`T`\>(`input`): `boolean`

Check if the given object is null / undefined or contains no public properties.

**`Since`**

1.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | The object to inspect. |

#### Returns

`boolean`

true if the given object is null, undefined or contains no public properties.

#### Defined in

[predicates.ts:124](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L124)

___

### isEmptySet

▸ **isEmptySet**<`T`\>(`input`): `boolean`

Check if the given set is null / undefined or contains no elements.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `Set`<`T`\> | The set object to inspect. |

#### Returns

`boolean`

true if given set is null, undefined or contains no elements.

#### Defined in

[predicates.ts:76](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L76)

___

### isNonEmptyArray

▸ **isNonEmptyArray**<`T`\>(`input`): input is T[]

Check if the given array is not null / undefined and contains at least one element. This function can also be used as a type predicate.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T`[] | The array object to inspect. |

#### Returns

input is T[]

true if the given array exists (not null / undefined) and contains at least one element.

#### Defined in

[predicates.ts:64](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L64)

___

### isNonEmptyMap

▸ **isNonEmptyMap**<`K`, `V`\>(`input`): input is Map<K, V\>

Check if the given map is not null / undefined and contains at least one element. This function can also be used as a type predicate.

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
| `input` | `undefined` \| ``null`` \| `Map`<`K`, `V`\> | The map object to inspect. |

#### Returns

input is Map<K, V\>

true if the given map is not null / undefined and contains at least one element.

#### Defined in

[predicates.ts:112](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L112)

___

### isNonEmptyObject

▸ **isNonEmptyObject**<`T`\>(`input`): input is T

Check if the given object is not null / undefined and contains at least one public property. This function can also be used as a type predicate.

**`Since`**

1.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | The object to inspect. |

#### Returns

input is T

true if the given object is not null / undefined and contains at least one property.

#### Defined in

[predicates.ts:136](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L136)

___

### isNonEmptySet

▸ **isNonEmptySet**<`T`\>(`input`): input is Set<T\>

Check if the given set is not null / undefined and contains at least one element. This function can also be used as a type predicate.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `Set`<`T`\> | The set object to inspect. |

#### Returns

input is Set<T\>

true if the given set is not null / undefined and contains at least one element.

#### Defined in

[predicates.ts:88](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L88)

___

### isNullOrUndefined

▸ **isNullOrUndefined**<`T`\>(`input`): `boolean`

Check if the given value is null or undefined.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | The value to inspect. |

#### Returns

`boolean`

true if the input parameter is null or undefined, otherwise false.

#### Defined in

[predicates.ts:28](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L28)

___

### not

▸ **not**<`T`\>(`predicate`): [`Predicate`](modules.md#predicate)<`T`\>

Creates a new predicate function, which will negate the given one.

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

A new [Predicate](modules.md#predicate), which evaluates the given condition and returns the negated value (e.g. false if the inner condition is true and vice versa).

#### Defined in

[predicates.ts:190](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L190)

___

### notNullOrUndefined

▸ **notNullOrUndefined**<`T`\>(`input`): input is T

Check if the given value is not null and not undefined.  This function can also be used as a type predicate.

**`Since`**

1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `undefined` \| ``null`` \| `T` | The value to inspect. |

#### Returns

input is T

false if the input value is null or undefined, otherwise true.

#### Defined in

[predicates.ts:40](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L40)

___

### or

▸ **or**<`T`\>(...`predicates`): [`Predicate`](modules.md#predicate)<`T`\>

Creates a new predicate function, checking if an input value satisfies any of the given conditions (a logical OR between other predicates).

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

[predicates.ts:171](https://github.com/js-data-tools/js-helpers/blob/290463f/src/predicates.ts#L171)

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

[progress.ts:111](https://github.com/js-data-tools/js-helpers/blob/290463f/src/progress.ts#L111)
