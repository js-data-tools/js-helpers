[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / toJsonLine

# Function: toJsonLine()

> **toJsonLine**(`value`, `replacer?`): `string`

Defined in: [json/json-lines.ts:60](https://github.com/js-data-tools/js-helpers/blob/master/src/json/json-lines.ts#L60)

Render the given value as an NDJSON entry: a JSON without whitespace, followed by a line break.

## Parameters

### value

`unknown`

The value to render as an NDJSON (JSON line).

### replacer?

(`key`, `value`) => `any`

An optional function that transforms the results (see JSON.stringify).

## Returns

`string`

A string with JSON representation of the given value (no whitespace or line breaks in the middle), followed by a line break.

## Since

0.1.2

## Example

```ts
toJsonLine([
  {
    name: "John",
    age: 23,
    male: true
  },
  {
    name: "Mary",
    age: 21
  }
]);

// => `[{"name":"John","age":23,"male":true},{"name":"Mary","age":21}]`
```
