[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / parseJsonLines

# Function: parseJsonLines()

> **parseJsonLines**\<`T`\>(`textLines`, `reviver?`): `Iterable`\<`T`\>

Defined in: [json/json-lines.ts:13](https://github.com/js-data-tools/js-helpers/blob/master/src/json/json-lines.ts#L13)

Parses an NDJSON stream

## Type Parameters

### T

`T`

## Parameters

### textLines

`Iterable`\<`string`\>

The enumerable collection of text lines to parse - every entry is supposed to be a valid JSON text to parse

### reviver?

(`this`, `key`, `value`) => `any`

An optional reviver object (see JSON#parse)

## Returns

`Iterable`\<`T`\>

An iterable collection of parsed values.

## Since

0.1.2
