[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / skipPairsUntil

# Function: skipPairsUntil()

## Call Signature

> **skipPairsUntil**(`text`, `start`, `symbol`, `throwOnMismatch?`): `number`

Defined in: [strings/scan.ts:32](https://github.com/js-data-tools/js-helpers/blob/master/src/strings/scan.ts#L32)

Finds the first occurrence of the specified symbol, skipping quoted strings and pairs of braces, parens and square brackets.

### Parameters

#### text

`string`

The string to scan.

#### start

`number`

The zero-based offset to start searching from.

#### symbol

`number`

The character to search (or a callback function that should return true if a symbol passed as parameter is the one being searched).

#### throwOnMismatch?

`boolean`

Set to false to prevent throwing exception when opening and closing parenthesis / braces / brackets do not match.

### Returns

`number`

## Call Signature

> **skipPairsUntil**(`text`, `start`, `symbol`, `throwOnMismatch?`): `number`

Defined in: [strings/scan.ts:33](https://github.com/js-data-tools/js-helpers/blob/master/src/strings/scan.ts#L33)

Finds the first occurrence of the specified symbol, skipping quoted strings and pairs of braces, parens and square brackets.

### Parameters

#### text

`string`

The string to scan.

#### start

`number`

The zero-based offset to start searching from.

#### symbol

`string`

The character to search (or a callback function that should return true if a symbol passed as parameter is the one being searched).

#### throwOnMismatch?

`boolean`

Set to false to prevent throwing exception when opening and closing parenthesis / braces / brackets do not match.

### Returns

`number`

## Call Signature

> **skipPairsUntil**(`text`, `start`, `match`, `throwOnMismatch?`): `number`

Defined in: [strings/scan.ts:34](https://github.com/js-data-tools/js-helpers/blob/master/src/strings/scan.ts#L34)

Finds the first occurrence of the specified symbol, skipping quoted strings and pairs of braces, parens and square brackets.

### Parameters

#### text

`string`

The string to scan.

#### start

`number`

The zero-based offset to start searching from.

#### match

(`x`) => `boolean`

#### throwOnMismatch?

`boolean`

Set to false to prevent throwing exception when opening and closing parenthesis / braces / brackets do not match.

### Returns

`number`
