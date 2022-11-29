import { describe, it, expect } from "vitest";
import { formatSize, formatCompact, formatDuration } from "./format";

describe("Test formatting helpers", () => {
    describe("test formatSize", () => {
        it("formatSize(12) => 12 B", () => {
            const actual = formatSize(12);
            expect(actual).toBe("12 B");
        });

        it("formatSize(12345) => 12.35 KB", () => {
            const actual = formatSize(12345);
            expect(actual).toBe("12.35 KB");
        });

        it("formatSize(12300) => 12.3 KB - truncate trailing zeros", () => {
            const actual = formatSize(12300);
            expect(actual).toBe("12.3 KB");
        });

        it("formatSize(123456) => 123.5 KB", () => {
            const actual = formatSize(123456);
            expect(actual).toBe("123.5 KB");
        });

        it("formatSize(12301278) => 12.3 MB", () => {
            const actual = formatSize(12301278);
            expect(actual).toBe("12.3 MB");
        });

        it("formatSize(1023456789) => 1.02 GB", () => {
            const actual = formatSize(1023456789);
            expect(actual).toBe("1.02 GB");
        });

        it("formatSize(1023456789, 1024) => 976 MiB", () => {
            const actual = formatSize(1023456789, 1024);
            expect(actual).toBe("976 MiB");
        });
    });

    describe("test formatCompact", () => {
        it("formatCompact(123) => 123", () => {
            const actual = formatCompact(123);
            expect(actual).toBe("123");
        });

        it("formatCompact(12345) => 12.35K", () => {
            const actual = formatCompact(12345);
            expect(actual).toBe("12.35K");
        });

        it("formatCompact(1200345) => 1.2M", () => {
            const actual = formatCompact(1200345);
            expect(actual).toBe("1.2M");
        });
    });

    describe("test formatDuration", () => {
        it("Duration shorter than one second should be measured in msec", () => {
            const actual = formatDuration(925);
            expect(actual).toBe("925 msec");
        });

        it("Duration between one second and one minute should be measured in seconds with up to 2 decimal digits", () => {
            const actual = formatDuration(53256);
            expect(actual).toBe("53.26 sec");
        });

        it("Duration between 1 and 2 minutes should be measured in seconds (int)", () => {
            const actual = formatDuration(65256);
            expect(actual).toBe("65 sec");
        });

        it("Duration longer than 2 minutes should be measured in minutes and seconds", () => {
            const actual = formatDuration(127874);
            expect(actual).toBe("2 min 8 sec");
        });

        it("Duration longer than 2 minutes should omit seconds when possible", () => {
            const actual = formatDuration(180014);
            expect(actual).toBe("3 min");
        });
    })
});
