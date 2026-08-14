[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / notNullOrUndefined

# Function: notNullOrUndefined()

> **notNullOrUndefined**\<`T`\>(`input`): `input is T`

Defined in: [predicates.ts:52](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L52)

Check if the given value is not null and not undefined.  This function can also be used as a type predicate.

## Type Parameters

### T

`T`

## Parameters

### input

`T` \| `null` \| `undefined`

The value to inspect.

## Returns

`input is T`

false if the input value is null or undefined, otherwise true.

## Since

0.1.2
