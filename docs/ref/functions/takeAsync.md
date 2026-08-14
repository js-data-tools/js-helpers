[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / takeAsync

# Function: takeAsync()

> **takeAsync**\<`T`\>(`from`, `count`): `AsyncGenerator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:219](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L219)

Take (up to) first N elements of the given iterable collection.

## Type Parameters

### T

`T`

## Parameters

### from

`AsyncIterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to take elements of.

### count

`number`

The number of elements to take

## Returns

`AsyncGenerator`\<`T`, `void`, `undefined`\>

## Since

0.1.2
