[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / isDefaultValue

# Function: isDefaultValue()

> **isDefaultValue**(`value`): `boolean`

Defined in: [predicates.ts:186](https://github.com/js-data-tools/js-helpers/blob/master/src/predicates.ts#L186)

Checks if given value is default and can be safely omitted from serialization.  Empty values are null, undefined, empty string,
empty array, empty object, zero (numeric), false (boolean).

## Parameters

### value

`unknown`

The value to inspect

## Returns

`boolean`

true if value is empty; otherwise false.

## Since

0.3.0
