import { describe, it, expect, vi } from "vitest";
import { ProgressReporter, trackProgressAsync } from "./progress";

describe("test report progress", () => {
    describe("test ProgressReporter", () => {
        vi.useFakeTimers();

        it("ProgressReporter.Log() should be called only once a second", () => {
            const log = vi.fn();

            const reporter = new ProgressReporter(log);

            reporter.start();

            reporter.entry();
            reporter.entry();
            expect(log).not.toBeCalled(); // Should not be called after the first time
            vi.advanceTimersByTime(1000);
            reporter.entry();
            reporter.entry();
            expect(log).toHaveBeenCalledWith(1000, 3, 3, false); // Supposed to be called only once - after we advanced the timer
        });

        it("ProgressReporter.Log() should be called at the end", () => {
            const log = vi.fn();

            const reporter = new ProgressReporter(log);

            reporter.start();
            reporter.stopAndReport();
            expect(log).toHaveBeenCalledWith(0, 0, 0, true); // Supposed to be called only once - at the end
        });
    });

    describe("test trackProgressAsync", () => {
        vi.useFakeTimers();

        async function* asyncSequence(): AsyncIterable<number> {
            yield 1;
            await Promise.resolve();
            yield 2;
            await Promise.resolve();
            yield 3;
        }

        it("trackProgressAsync() should work with custom log function", async () => {
            const log = vi.fn();

            const sequence = trackProgressAsync(asyncSequence(), log);
            const result: number[] = [];
            for await (const entry of sequence) {
                result.push(entry);
                vi.advanceTimersByTime(500);
            }

            // First, ensure that wrapped iterable still returns the expected values
            expect(result).toStrictEqual([1, 2, 3]);

            expect(log).toBeCalledTimes(2);
            // First log message should be after two entries (1 second)
            expect(log).toHaveBeenNthCalledWith(1, 1000, 2, 2, false);
            // The last log message should be after the whole sequence
            expect(log).toHaveBeenNthCalledWith(2, 1500, 3, 2, true);
        });

        it("trackProgressAsync() should work with custom monitor function", async () => {
            const log = vi.fn();
            const monitor = new ProgressReporter(log, 200);

            const sequence = trackProgressAsync(asyncSequence(), monitor);
            const result: number[] = [];
            for await (const entry of sequence) {
                result.push(entry);
                vi.advanceTimersByTime(500);
            }

            // First, ensure that wrapped iterable still returns the expected values
            expect(result).toStrictEqual([1, 2, 3]);

            expect(log).toBeCalledTimes(4);
            expect(log).toHaveBeenNthCalledWith(1, 500, 1, 2, false);
            expect(log).toHaveBeenNthCalledWith(2, 1000, 2, 2, false);
            expect(log).toHaveBeenNthCalledWith(3, 1500, 3, 2, false);
            expect(log).toHaveBeenNthCalledWith(4, 1500, 3, 2, true);
        });
    });
});
