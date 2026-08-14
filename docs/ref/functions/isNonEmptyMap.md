[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / isNonEmptyMap

# Function: isNonEmptyMap()

> **isNonEmptyMap**\<`K`, `V`\>(`input`): `input is Map<K, V>`

Defined in: [predicates.ts:124](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L124)

Check if the given map is not null / undefined and contains at least one element. This function can also be used as a type predicate.

## Type Parameters

### K

`K`

### V

`V`

## Parameters

### input

`Map`\<`K`, `V`\> \| `null` \| `undefined`

The map object to inspect.

## Returns

`input is Map<K, V>`

true if the given map is not null / undefined and contains at least one element.

## Since

0.1.2
