[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / not

# Function: not()

> **not**\<`T`\>(`predicate`): [`Predicate`](../type-aliases/Predicate.md)\<`T`\>

Defined in: [predicates.ts:251](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L251)

Creates a new predicate function, which will negate the given one.

## Type Parameters

### T

`T`

## Parameters

### predicate

[`Predicate`](../type-aliases/Predicate.md)\<`T`\>

The "inner" predicate to negate.

## Returns

[`Predicate`](../type-aliases/Predicate.md)\<`T`\>

A new [Predicate](../type-aliases/Predicate.md), which evaluates the given condition and returns the negated value (e.g. false if the inner condition is true and vice versa).

## Since

0.1.2
