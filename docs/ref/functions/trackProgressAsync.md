[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / trackProgressAsync

# Function: trackProgressAsync()

> **trackProgressAsync**\<`T`\>(`source`, `report?`): `AsyncIterable`\<`T`\>

Defined in: [progress.ts:111](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L111)

Wraps given async iterable with a progress monitor, reporting how many items were processed so far (once a second).

## Type Parameters

### T

`T`

## Parameters

### source

`AsyncIterable`\<`T`\>

The iterable collection to monitor the progress of iteration (consumption) for.

### report?

[`ProgressReporter`](../classes/ProgressReporter.md) \| [`ProgressLogCallback`](../type-aliases/ProgressLogCallback.md)

Either the callback function for reporting a progress or an instance of ProgressReporter.

## Returns

`AsyncIterable`\<`T`\>

A new async iterable, monitoring the progress of the iteration.

## Since

0.1.2
