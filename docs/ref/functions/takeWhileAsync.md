[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / takeWhileAsync

# Function: takeWhileAsync()

> **takeWhileAsync**\<`T`\>(`from`, `condition`): `AsyncGenerator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:246](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L246)

Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).

## Type Parameters

### T

`T`

## Parameters

### from

`AsyncIterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to take elements of.

### condition

((`item`) => `boolean`) \| `null` \| `undefined`

The predicate, taking a collection's element as a parameter and returning false to stop enumeration.

## Returns

`AsyncGenerator`\<`T`, `void`, `undefined`\>

## Since

0.1.2
