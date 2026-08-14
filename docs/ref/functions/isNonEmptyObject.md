[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / isNonEmptyObject

# Function: isNonEmptyObject()

> **isNonEmptyObject**\<`T`\>(`input`): `input is T`

Defined in: [predicates.ts:148](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L148)

Check if the given object is not null / undefined and contains at least one public property. This function can also be used as a type predicate.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### input

`T` \| `null` \| `undefined`

The object to inspect.

## Returns

`input is T`

true if the given object is not null / undefined and contains at least one property.

## Since

0.1.2
