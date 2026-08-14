[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / and

# Function: and()

> **and**\<`T`\>(...`predicates`): [`Predicate`](../type-aliases/Predicate.md)\<`T`\>

Defined in: [predicates.ts:213](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L213)

Creates a new predicate function, checking if an input value satisfies all given conditions (a logical AND between other predicates).

## Type Parameters

### T

`T`

## Parameters

### predicates

...([`Predicate`](../type-aliases/Predicate.md)\<`T`\> \| `null` \| `undefined`)[]

The list of condition functions to combine with a logical AND.

## Returns

[`Predicate`](../type-aliases/Predicate.md)\<`T`\>

A new [Predicate](../type-aliases/Predicate.md), which returns true if all inner conditions are met for the given input value.

## Since

0.1.2
