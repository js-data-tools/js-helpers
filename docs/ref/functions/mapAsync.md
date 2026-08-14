[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / mapAsync

# Function: mapAsync()

> **mapAsync**\<`T`, `U`\>(`source`, `transform`): `AsyncGenerator`\<`U`\>

Defined in: [iterable/map.ts:14](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/map.ts#L14)

Create a transforming proxy for asynchronous stream of values.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### source

`AsyncIterable`\<`T`\>

The source asynchronous iterable stream of values (generator or some other source).

### transform

(`item`) => `U`

The callback function that will transform entries of the source collection to the desired format.

## Returns

`AsyncGenerator`\<`U`\>

A new iterable stream of transformed values (asynchronous).

## Description

This function does not iterate the source collection by itself, it just creates a wrapper iterator.
When caller asks for the next entry, the wrapper iterator delegates the call to the internal (source) iterator,
then applies the given transformation function on that entry and returns the transformation result to caller.

## Since

0.1.2
