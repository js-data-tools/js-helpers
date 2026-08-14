[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / isNonEmptyArray

# Function: isNonEmptyArray()

> **isNonEmptyArray**\<`T`\>(`input`): `input is T[]`

Defined in: [predicates.ts:76](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L76)

Check if the given array is not null / undefined and contains at least one element. This function can also be used as a type predicate.

## Type Parameters

### T

`T`

## Parameters

### input

`T`[] \| `null` \| `undefined`

The array object to inspect.

## Returns

`input is T[]`

true if the given array exists (not null / undefined) and contains at least one element.

## Since

0.1.2
