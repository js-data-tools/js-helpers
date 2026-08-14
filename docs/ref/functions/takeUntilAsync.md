[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / takeUntilAsync

# Function: takeUntilAsync()

> **takeUntilAsync**\<`T`\>(`from`, `condition`): `AsyncGenerator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:276](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L276)

Enumerate elements of the given iterable collection, until some element satisfies the given condition (predicate).

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
