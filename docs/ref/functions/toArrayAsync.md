[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / toArrayAsync

# Function: toArrayAsync()

> **toArrayAsync**\<`T`\>(`source`, `target?`): `Promise`\<`T`[]\>

Defined in: [iterable/toArray.ts:10](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/toArray.ts#L10)

Reads all values from the asynchronous stream (iterable) and stores them in the array.

## Type Parameters

### T

`T`

## Parameters

### source

`AsyncIterable`\<`T`\>

An async stream of values to iterate.

### target?

`T`[]

Reference to the array to append values to.  A new array will be created if this parameter is null or omitted.

## Returns

`Promise`\<`T`[]\>

A promise for the resulting array.

## Since

0.1.2
