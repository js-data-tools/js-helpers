[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / roundNumber

# Function: roundNumber()

> **roundNumber**(`value`, `maxDecimalDigits?`): `number`

Defined in: [convert/numeric.ts:18](https://github.com/js-data-tools/js-helpers/blob/master/src/convert/numeric.ts#L18)

Rounds the given number to have at most <n> decimal digits.

## Parameters

### value

`number`

The numeric value to round

### maxDecimalDigits?

`number` = `2`

The maximal number of decimal digits to keep.  Negative or undefined value means "do not round".

## Returns

`number`

The given number, rounded to the requested number of decimal digits.

## Since

0.1.2

## Example

```ts
console.log(roundNumber(3.14159265));    // 3.14
console.log(roundNumber(3.14159265, 4)); // 3.1416
console.log(roundNumber(-2.246));        // -2.25
```
