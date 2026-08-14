[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / isNonEmptySet

# Function: isNonEmptySet()

> **isNonEmptySet**\<`T`\>(`input`): `input is Set<T>`

Defined in: [predicates.ts:100](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L100)

Check if the given set is not null / undefined and contains at least one element. This function can also be used as a type predicate.

## Type Parameters

### T

`T`

## Parameters

### input

`Set`\<`T`\> \| `null` \| `undefined`

The set object to inspect.

## Returns

`input is Set<T>`

true if the given set is not null / undefined and contains at least one element.

## Since

0.1.2
