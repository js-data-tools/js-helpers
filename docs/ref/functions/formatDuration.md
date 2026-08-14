[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / formatDuration

# Function: formatDuration()

> **formatDuration**(`durationMsec`): `string`

Defined in: [format.ts:71](https://github.com/js-data-tools/js-helpers/blob/master/src/format.ts#L71)

Format a duration of operation, initially measured in milliseconds.

## Parameters

### durationMsec

`number`

The duration (in milliseconds) to format

## Returns

`string`

A string, representing given duration in milliseconds or seconds (whatever is shorter)

## Description

When the duration is shorter than one second, the result will be measured in milliseconds (integer).
If duration is in the range between 1 second and 1 minute, it will be measured in seconds (up to two decimal digits).
Durations between one and two minutes will be measured in seconds (as an integer number)
And finally, the duration longer than 2 minutes will be presented as "M min [S sec]".

## Since

0.2.0

## Example

```ts
formatDuration(925);       // 925 msec
formatDuration(53256);     // 53.26 sec
formatDuration(65256);     // 65 sec
formatDuration(127874);    // 2 min 8 sec
formatDuration(180014);    // 3 min
```
