[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / take

# Function: take()

> **take**\<`T`\>(`from`, `count`): `Generator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:48](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L48)

Take (up to) first N elements of the given iterable collection.

## Type Parameters

### T

`T`

## Parameters

### from

`Iterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable object to take elements of.

### count

`number`

The number of elements to take.  A negative count stands for "take all elements".

## Returns

`Generator`\<`T`, `void`, `undefined`\>

A new iterable object, which, when iterated, will return the first <count> elements from the source collection (or less
is the source collection is shorter than <count>).

## Description

This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
iterator up to <N> times and then stops the enumeration as if the original iterator reached the end of the sequence.

## Since

0.1.2
