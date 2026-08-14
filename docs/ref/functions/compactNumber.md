[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / compactNumber

# Function: compactNumber()

> **compactNumber**(`value`, `maxPower?`, `base?`): \[`number`, `number`\]

Defined in: [convert/numeric.ts:47](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/numeric.ts#L47)

Converts number to a [compact, power] tuple.  In other words, value = compact * base ^ power.
This format allows formatting given number as a compact string (1234567890 => [1.23, 3] => 1.23G)

## Parameters

### value

`number`

The numeric value to convert.

### maxPower?

`number` = `4`

The maximal allowed power of the base (used to make sure we have a unit name for the power)

### base?

`number` = `1000`

The base for the power (default is 1000).

## Returns

\[`number`, `number`\]

The array, containing two numbers: the compact and power.

## Since

0.1.2
