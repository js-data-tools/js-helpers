[**@js-data-tools/js-helpers**](../modules.md)

***

[@js-data-tools/js-helpers](../modules.md) / ProgressReporter

# Class: ProgressReporter

Defined in: [progress.ts:14](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L14)

A helper class that can be used to monitor a progress of processing a stream of items,
reporting it to the console (or provided callback)

## Since

0.1.2

## Constructors

### Constructor

> **new ProgressReporter**(`logCallback?`, `reportPeriodMsec?`): `ProgressReporter`

Defined in: [progress.ts:27](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L27)

Constructs a new ProgressReporter

#### Parameters

##### logCallback?

[`ProgressLogCallback`](../type-aliases/ProgressLogCallback.md)

The callback function for printing a progress log message

##### reportPeriodMsec?

`number`

The minimal amount of milliseconds to pass between two subsequent progress messages.

#### Returns

`ProgressReporter`

## Properties

### count

> **count**: `number`

Defined in: [progress.ts:16](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L16)

***

### duration

> **duration**: `number`

Defined in: [progress.ts:17](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L17)

***

### startTime

> **startTime**: `number`

Defined in: [progress.ts:15](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L15)

***

### defaultLog

> `static` **defaultLog**: (`duration`, `count`, `rate`, `completed`) => `void`

Defined in: [progress.ts:93](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L93)

#### Parameters

##### duration

`number`

##### count

`number`

##### rate

`number`

##### completed

`boolean`

#### Returns

`void`

## Methods

### entry()

> **entry**(): `void`

Defined in: [progress.ts:48](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L48)

Inform the progress monitor about another entry that was processed.  It will probably trigger a log message if enough time was passed since the last message.

#### Returns

`void`

***

### report()

> **report**(`completed?`): `void`

Defined in: [progress.ts:77](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L77)

Prints the current progress.  Usually called internally

#### Parameters

##### completed?

`boolean` = `false`

true if processing is completed.

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [progress.ts:39](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L39)

Starts monitoring the progress of stream processing.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [progress.ts:59](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L59)

Stops monitoring the progress of stream processing.  This method should be called when processing is completed.

#### Returns

`void`

***

### stopAndReport()

> **stopAndReport**(): `void`

Defined in: [progress.ts:68](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L68)

Stops monitoring and reports the overall benchmarking.  A shortcut for this.stop() and this.report(true)

#### Returns

`void`

***

### formatMessage()

> `static` **formatMessage**(`duration`, `count`, `rate`): `string`

Defined in: [progress.ts:96](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L96)

#### Parameters

##### duration

`number`

##### count

`number`

##### rate

`number`

#### Returns

`string`

***

### logToConsole()

> `static` **logToConsole**(`duration`, `count`, `rate`, `completed`): `void`

Defined in: [progress.ts:85](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L85)

#### Parameters

##### duration

`number`

##### count

`number`

##### rate

`number`

##### completed

`boolean`

#### Returns

`void`

***

### logToStdOut()

> `static` **logToStdOut**(`duration`, `count`, `rate`, `completed`): `void`

Defined in: [progress.ts:89](https://github.com/js-data-tools/js-helpers/blob/master/src/progress.ts#L89)

#### Parameters

##### duration

`number`

##### count

`number`

##### rate

`number`

##### completed

`boolean`

#### Returns

`void`
