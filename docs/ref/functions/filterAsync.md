[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / filterAsync

# Function: filterAsync()

> **filterAsync**\<`T`\>(`from`, `predicate?`): `AsyncGenerator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:192](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L192)

Filter elements of the given iterable collection, using given predicate function.

## Type Parameters

### T

`T`

## Parameters

### from

`AsyncIterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to filter elements of.

### predicate?

((`item`) => `boolean`) \| `null`

The predicate function, receiving a single collection's element as a parameter and returning true to keep that element (or false to skip it)

## Returns

`AsyncGenerator`\<`T`, `void`, `undefined`\>

## Since

0.1.2
