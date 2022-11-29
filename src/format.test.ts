import { describe, it, expect } from "vitest";
import { formatSize, formatCompact } from "./format";

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

    describe("test formatCompact()", () => {
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
});