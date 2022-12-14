[@js-data-tools/js-helpers](../README.md) / [Exports](../modules.md) / PropertiesOrderOptions

# Interface: PropertiesOrderOptions

Configuration, specifying how to re-order properties of a plain JavaScript object

## Table of contents

### Properties

- [first](PropertiesOrderOptions.md#first)
- [last](PropertiesOrderOptions.md#last)
- [sort](PropertiesOrderOptions.md#sort)
- [sortDescending](PropertiesOrderOptions.md#sortdescending)

## Properties

### first

• `Optional` **first**: `string`[]

Names of properties to put first in the resulting object.  Order of values in the "first" list is important,
it will be preserved in the resulting object.  The "first" list may contain names that do not exist
in the real object, they will simply be ignored.

If some name appears in both "first" and "last" lists, the "first" has higher priority than the "last".

#### Defined in

serialize/normalize.ts:73

___

### last

• `Optional` **last**: `string`[]

NAmes of properties to put last in the resulting object.  Order of values in the "last" list is important,
it will be preserved in the resulting object.  The "last" list may contain names that do not exist
in the real object, they will simply be ignored.

If some name appears in both "first" and "last" lists, the "first" has higher priority than the "last".

#### Defined in

serialize/normalize.ts:82

___

### sort

• `Optional` **sort**: `boolean`

A boolean flag, specifying whether to sort properties by their name.  Properties that appear in the "first" or "last"
lists will not participate in the sort.

#### Defined in

serialize/normalize.ts:88

___

### sortDescending

• `Optional` **sortDescending**: `boolean`

A boolean flag, specifying whether to sort property names in the descending order (default is to sort them ascending).

#### Defined in

serialize/normalize.ts:93
