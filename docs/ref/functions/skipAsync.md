[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / skipAsync

# Function: skipAsync()

> **skipAsync**\<`T`\>(`from`, `count`): `AsyncGenerator`\<`T`, `void`, `undefined`\>

Defined in: [iterable/select.ts:291](https://github.com/js-data-tools/js-helpers/blob/master/src/iterable/select.ts#L291)

Skip (up to) first N elements of the given iterable collection.

## Type Parameters

### T

`T`

## Parameters

### from

`AsyncIterable`\<`T`, `any`, `any`\> \| `null` \| `undefined`

The enumerable collection to skip elements of.

### count

`number`

The number of elements to skip

## Returns

`AsyncGenerator`\<`T`, `void`, `undefined`\>

## Since

0.1.2
