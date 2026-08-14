[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / skipUntil

# Function: skipUntil()

> **skipUntil**\<`T`\>(`from`, `condition`): `Generator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:177](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L177)

Skip first elements of the iterable collection until one of them matches a given condition.

## Type Parameters

### T

`T`

## Parameters

### from

`Iterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to skip elements of.

### condition

((`item`) => `boolean`) \| `null` \| `undefined`

The predicate function, getting a collection's element and returning false if element should be skipped (true to stop skipping and return the rest)

## Returns

`Generator`\<`T`, `void`, `undefined`\>

## Since

0.1.2
