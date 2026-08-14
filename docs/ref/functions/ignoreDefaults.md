[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / ignoreDefaults

# Function: ignoreDefaults()

> **ignoreDefaults**(`key`, `value`): `any`

Defined in: [serialize/normalize.ts:58](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L58)

A reviver function for the JSON.stringify, which will remove properties with empty values:
undefined, nulls, empty strings, empty arrays, empty object literals.

## Parameters

### key

`string`

The name of the property being inspected (ignored)

### value

`any`

The value of the property to inspect and replace with

## Returns

`any`

undefined if the value is empty, otherwise the value itself.

## Since

0.3.0

## Example

```ts
JSON.stringify({
     major: 1,
     minor: 0,           // Not empty
     patch: undefined,   // Empty
     revision: "",       // Empty
     final: false,       // Not empty
     author: "Sergey",
     scope: null,        // Empty
     reviewers: [],      // Empty
     coverage: {}        // Empty
 }, ignoreEmpty);

// {"major":1,"minor":0,"final":false,"author":"Sergey"}
```
