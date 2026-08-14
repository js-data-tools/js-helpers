[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / or

# Function: or()

> **or**\<`T`\>(...`predicates`): [`Predicate`](../type-aliases/Predicate.md)\<`T`\>

Defined in: [predicates.ts:232](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L232)

Creates a new predicate function, checking if an input value satisfies any of the given conditions (a logical OR between other predicates).

## Type Parameters

### T

`T`

## Parameters

### predicates

...([`Predicate`](../type-aliases/Predicate.md)\<`T`\> \| `null` \| `undefined`)[]

A list of functions, checking the "inner" conditions.  The "outer" predicate will return true if at least one of inner conditions is met.

## Returns

[`Predicate`](../type-aliases/Predicate.md)\<`T`\>

A new [Predicate](../type-aliases/Predicate.md), which evaluate given conditions on an input value and return true if at least one of inner conditions is met.

## Since

0.1.2
