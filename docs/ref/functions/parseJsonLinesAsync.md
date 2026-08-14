[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / parseJsonLinesAsync

# Function: parseJsonLinesAsync()

> **parseJsonLinesAsync**\<`T`\>(`textLines`, `reviver?`): `AsyncIterable`\<`T`\>

Defined in: [json/json-lines.ts:29](https://github.com/js-data-tools/js-helpers/blob/master/src/json/json-lines.ts#L29)

Parses an asynchronous NDJSON stream

## Type Parameters

### T

`T`

## Parameters

### textLines

`AsyncIterable`\<`string`\>

The enumerable async stream of text lines to parse - every entry is supposed to be a valid JSON.

### reviver?

(`this`, `key`, `value`) => `any`

An optional reviver object (see JSON#parse)

## Returns

`AsyncIterable`\<`T`\>

An iterable asynchronous stream of parsed values.

## Since

0.1.2
