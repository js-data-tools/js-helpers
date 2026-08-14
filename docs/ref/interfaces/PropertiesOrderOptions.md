[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / PropertiesOrderOptions

# Interface: PropertiesOrderOptions

Defined in: [serialize/normalize.ts:65](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L65)

Configuration, specifying how to re-order properties of a plain JavaScript object

## Properties

### first?

> `optional` **first?**: `string`[]

Defined in: [serialize/normalize.ts:73](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L73)

Names of properties to put first in the resulting object.  Order of values in the "first" list is important,
it will be preserved in the resulting object.  The "first" list may contain names that do not exist
in the real object, they will simply be ignored.

If some name appears in both "first" and "last" lists, the "first" has higher priority than the "last".

***

### last?

> `optional` **last?**: `string`[]

Defined in: [serialize/normalize.ts:82](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L82)

NAmes of properties to put last in the resulting object.  Order of values in the "last" list is important,
it will be preserved in the resulting object.  The "last" list may contain names that do not exist
in the real object, they will simply be ignored.

If some name appears in both "first" and "last" lists, the "first" has higher priority than the "last".

***

### sort?

> `optional` **sort?**: `boolean`

Defined in: [serialize/normalize.ts:88](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L88)

A boolean flag, specifying whether to sort properties by their name.  Properties that appear in the "first" or "last"
lists will not participate in the sort.

***

### sortDescending?

> `optional` **sortDescending?**: `boolean`

Defined in: [serialize/normalize.ts:93](https://github.com/js-data-tools/js-helpers/blob/master/src/serialize/normalize.ts#L93)

A boolean flag, specifying whether to sort property names in the descending order (default is to sort them ascending).
