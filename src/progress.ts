/**
 * @callback
 */
export type ProgressLogCallback = (duration: number, count: number, rate: number, completed: boolean) => void;

/**
 * A helper class that can be used to monitor a progress of processing a stream of items,
 * reporting it to the console (or provided callback)
 * 
 * @since 1.0.0
 * @category progress
 */
// eslint-disable @typescript-eslint/lines-between-class-members
export class ProgressReporter {
    startTime: number;
    count: number;
    duration: number;
    private lastReportTime: number;
    private reportEvery: number;
    private log: ProgressLogCallback;

    /**
     * Constructs a new ProgressReporter
     * @param {ProgressLogCallback} [logCallback] - A callback function for printing a progress log message
     * @param {number} [reportPeriodMsec=1000] - The minimal amount of milliseconds to pass between two subsequent progress messages.
     */
    constructor(logCallback?: ProgressLogCallback, reportPeriodMsec?: number) {
        this.startTime = Date.now();
        this.lastReportTime = this.startTime;
        this.count = 0;
        this.duration = 0;
        this.reportEvery = reportPeriodMsec ?? 1000;
        this.log = logCallback || ProgressReporter.defaultLog;
    }

    /**
     * Starts monitoring the progress of stream processing.
     */
    start(): void {
        this.startTime = Date.now();
        this.count = 0;
        this.lastReportTime = this.startTime;
    }

    /**
     * Inform the progress monitor about another entry that was processed.  It will probably trigger a log message if enough time was passed since the last message.
     */
     entry(): void {
        ++this.count;
        if (this.reportEvery > 0 && Date.now() - this.lastReportTime >= this.reportEvery) {
            this.duration = Date.now() - this.startTime;
            this.report();
        }
    }

    /**
     * Stops monitoring the progress of stream processing.  This method should be called when processing is completed.
     */
     stop(): void {
        if (this.startTime !== null) {
            this.duration = Date.now() - this.startTime;
        }
    }

    /**
     * Stops monitoring and reports the overall benchmarking.  A shortcut for this.stop() and this.report(true)
     */
    stopAndReport(): void {
        this.stop();
        this.report(true);
    }

    /**
     * Prints the current progress.  Usually called internally
     * @param [completed=false] true if processing is completed.
     */
    report(completed = false): void {
        const rate = this.count > 0 ? Math.floor((this.count * 1000) / this.duration) : 0;
        this.log(this.duration, this.count, rate, completed);
        this.lastReportTime = Date.now();
    }

    //#region ---------- Statics ----------
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static logToConsole(duration: number, count: number, rate: number, completed: boolean): void {
        console.log(ProgressReporter.formatMessage(duration, count, rate));
    }

    static logToStdOut(duration: number, count: number, rate: number, completed: boolean): void {
        process.stdout.write(ProgressReporter.formatMessage(duration, count, rate) + (completed ? "\n" : "\r"));
    }

    static defaultLog: (duration: number, count: number, rate: number, completed: boolean) => void = 
        process && process.stdout ? ProgressReporter.logToStdOut : ProgressReporter.logToConsole;

    static formatMessage(duration: number, count: number, rate: number): string {
        return `Duration: ${duration / 1000} seconds, count: ${count}, rate: ${rate} entries/second`;
    }
    //#endregion
}

/**
 * Wraps given async iterable with a progress monitor, reporting how many items were processed so far (once a second).
 * 
 * @since 1.0.0
 * @category progress
 * @param source The iterable collection to monitor the progress of iteration (consumption) for.
 * @param [report] Either the callback function for reporting a progress or an instance of ProgressReporter.
 * @returns A new async iterable, monitoring the progress of the iteration.
 */
export async function* trackProgressAsync<T>(source: AsyncIterable<T>, report?: ProgressReporter | ProgressLogCallback): AsyncIterable<T> {
    let reporter: ProgressReporter;
    if (report) {
        if (typeof report === "function") {
            reporter = new ProgressReporter(report);
        } else {
            reporter = report;
        }
    } else {
        reporter = new ProgressReporter();
    }

    reporter.start();
    for await (const item of source) {
        yield item;
        reporter.entry();
    }
    reporter.stopAndReport();
}