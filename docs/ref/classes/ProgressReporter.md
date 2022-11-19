[@js-data-tools/js-helpers](../README.md) / [Exports](../modules.md) / ProgressReporter

# Class: ProgressReporter

A helper class that can be used to monitor a progress of processing a stream of items,
reporting it to the console (or provided callback)

**`Since`**

1.0.0

## Table of contents

### Constructors

- [constructor](ProgressReporter.md#constructor)

### Properties

- [count](ProgressReporter.md#count)
- [duration](ProgressReporter.md#duration)
- [lastReportTime](ProgressReporter.md#lastreporttime)
- [log](ProgressReporter.md#log)
- [reportEvery](ProgressReporter.md#reportevery)
- [startTime](ProgressReporter.md#starttime)
- [defaultLog](ProgressReporter.md#defaultlog)

### Methods

- [entry](ProgressReporter.md#entry)
- [report](ProgressReporter.md#report)
- [start](ProgressReporter.md#start)
- [stop](ProgressReporter.md#stop)
- [stopAndReport](ProgressReporter.md#stopandreport)
- [formatMessage](ProgressReporter.md#formatmessage)
- [logToConsole](ProgressReporter.md#logtoconsole)
- [logToStdOut](ProgressReporter.md#logtostdout)

## Constructors

### constructor

• **new ProgressReporter**(`logCallback?`, `reportPeriodMsec?`)

Constructs a new ProgressReporter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logCallback?` | [`ProgressLogCallback`](../modules.md#progresslogcallback) | A callback function for printing a progress log message |
| `reportPeriodMsec?` | `number` | The minimal amount of milliseconds to pass between two subsequent progress messages. |

#### Defined in

[progress.ts:27](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L27)

## Properties

### count

• **count**: `number`

#### Defined in

[progress.ts:16](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L16)

___

### duration

• **duration**: `number`

#### Defined in

[progress.ts:17](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L17)

___

### lastReportTime

• `Private` **lastReportTime**: `number`

#### Defined in

[progress.ts:18](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L18)

___

### log

• `Private` **log**: [`ProgressLogCallback`](../modules.md#progresslogcallback)

#### Defined in

[progress.ts:20](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L20)

___

### reportEvery

• `Private` **reportEvery**: `number`

#### Defined in

[progress.ts:19](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L19)

___

### startTime

• **startTime**: `number`

#### Defined in

[progress.ts:15](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L15)

___

### defaultLog

▪ `Static` **defaultLog**: (`duration`: `number`, `count`: `number`, `rate`: `number`, `completed`: `boolean`) => `void`

#### Type declaration

▸ (`duration`, `count`, `rate`, `completed`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `count` | `number` |
| `rate` | `number` |
| `completed` | `boolean` |

##### Returns

`void`

#### Defined in

[progress.ts:93](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L93)

## Methods

### entry

▸ **entry**(): `void`

Inform the progress monitor about another entry that was processed.  It will probably trigger a log message if enough time was passed since the last message.

#### Returns

`void`

#### Defined in

[progress.ts:48](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L48)

___

### report

▸ **report**(`completed?`): `void`

Prints the current progress.  Usually called internally

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `completed?` | `boolean` | `false` | true if processing is completed. |

#### Returns

`void`

#### Defined in

[progress.ts:77](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L77)

___

### start

▸ **start**(): `void`

Starts monitoring the progress of stream processing.

#### Returns

`void`

#### Defined in

[progress.ts:39](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L39)

___

### stop

▸ **stop**(): `void`

Stops monitoring the progress of stream processing.  This method should be called when processing is completed.

#### Returns

`void`

#### Defined in

[progress.ts:59](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L59)

___

### stopAndReport

▸ **stopAndReport**(): `void`

Stops monitoring and reports the overall benchmarking.  A shortcut for this.stop() and this.report(true)

#### Returns

`void`

#### Defined in

[progress.ts:68](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L68)

___

### formatMessage

▸ `Static` **formatMessage**(`duration`, `count`, `rate`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `count` | `number` |
| `rate` | `number` |

#### Returns

`string`

#### Defined in

[progress.ts:96](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L96)

___

### logToConsole

▸ `Static` **logToConsole**(`duration`, `count`, `rate`, `completed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `count` | `number` |
| `rate` | `number` |
| `completed` | `boolean` |

#### Returns

`void`

#### Defined in

[progress.ts:85](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L85)

___

### logToStdOut

▸ `Static` **logToStdOut**(`duration`, `count`, `rate`, `completed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `count` | `number` |
| `rate` | `number` |
| `completed` | `boolean` |

#### Returns

`void`

#### Defined in

[progress.ts:89](https://github.com/js-data-tools/js-helpers/blob/e415013/src/progress.ts#L89)
