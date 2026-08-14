[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / takeWhile

# Function: takeWhile()

> **takeWhile**\<`T`\>(`from`, `condition`): `Generator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:77](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L77)

Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).

## Type Parameters

### T

`T`

## Parameters

### from

`Iterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to take elements of.

### condition

((`item`) => `boolean`) \| `null` \| `undefined`

The predicate, taking a collection's element as a parameter and returning false to stop enumeration.

## Returns

`Generator`\<`T`, `void`, `undefined`\>

A new enumerable objects, which will return first elements of the source collection, which all satisfy the given condition.

## Description

This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
iterator.  It checks every element using the given predicate and stops the enumeration when predicate returns false.

## Since

0.1.2
