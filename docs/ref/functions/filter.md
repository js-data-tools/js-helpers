[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / filter

# Function: filter()

> **filter**\<`T`\>(`from`, `predicate?`): `Generator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:15](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L15)

Filter elements of the iterable collection, using the given predicate function.

## Type Parameters

### T

`T`

## Parameters

### from

`Iterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to filter elements of.

### predicate?

((`item`) => `boolean`) \| `null`

The predicate function, receiving a single collection's element as a parameter and returning true to keep that element (or false to skip it)

## Returns

`Generator`\<`T`, `void`, `undefined`\>

A new iterable object, which, when iterated, will return elements from the inner collection, filtered with the given predicate (e.g. only
those that the predicate returns true for them)

## Description

This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
iterator, skipping values that do not pass the given filter.

## Since

0.1.2
