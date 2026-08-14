[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / map

# Function: map()

> **map**\<`T`, `U`\>(`source`, `transform`): `Generator`\<`U`\>

Defined in: [iterable/map.ts:33](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/map.ts#L33)

Create a transforming proxy for synchronous stream of values (iterable collection).

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### source

`Iterable`\<`T`\>

The source iterable collection

### transform

(`item`) => `U`

The callback function that will transform entries of the source collection to the desired format.

## Returns

`Generator`\<`U`\>

A new iterable stream of transformed values.

## Description

This function by itself does not iterate the source collection, it just creates a wrapper iterator.
When caller asks for the next entry, the wrapper iterator delegates the call to the internal (source) iterator,
then applies the given transformation function on that entry and returns the transformation result to caller.

## Since

0.1.2
