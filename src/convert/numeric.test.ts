import { describe, it, expect } from "vitest";
import { roundNumber, compactNumber } from "./numeric";

describe("Test numeric convert helpers", () => {
    describe("Test roundNumber()", () => {
        it("roundNumber(2.176) => 2.18", () => {
            const actual = roundNumber(2.176);
            expect(actual).toBe(2.18);
        });

        it("roundNumber(-2.246) => 2.18", () => {
            const actual = roundNumber(-2.246);
            expect(actual).toBe(-2.25);
        });

        it("roundNumber(Math.PI) => 3.14", () => {
            const actual = roundNumber(Math.PI);
            expect(actual).toBe(3.14);
        });

        it("roundNumber(Math.PI, 7) => 3.1415927", () => {
            const actual = roundNumber(Math.PI, 7);
            expect(actual).toBe(3.1415927);
        });

        it("roundNumber(3.141592653589793, -1) returns number as-is", () => {
            const actual = roundNumber(3.141592653589793, -1);
            expect(actual).toBe(3.141592653589793);
        });
    });

    describe("Test compactNumber()", () => {
        it("compactNumber(-3.1415926) => [-3.14, 0]", () => {
            const actual = compactNumber(-3.1415926);
            expect(actual).toStrictEqual([-3.14, 0]);
        });

        it("compactNumber(123) => [123, 0]", () => {
            const actual = compactNumber(123);
            expect(actual).toStrictEqual([123, 0]);
        });

        it("compactNumber(1234) => [1.23, 1]", () => {
            const actual = compactNumber(1234);
            expect(actual).toStrictEqual([1.23, 1]);
        });

        it("compactNumber(12345) => [12.35, 1]", () => {
            const actual = compactNumber(12345);
            expect(actual).toStrictEqual([12.35, 1]);
        });

        it("compactNumber(123456) => [123.5, 1]", () => {
            const actual = compactNumber(123456);
            expect(actual).toStrictEqual([123.5, 1]);
        });

        it("compactNumber(1234567) => [1.23, 2]", () => {
            const actual = compactNumber(1234567);
            expect(actual).toStrictEqual([1.23, 2]);
        });

        it("compactNumber(1234567, 1) => [1235, 1]", () => {
            const actual = compactNumber(1234567, 1);
            expect(actual).toStrictEqual([1235, 1]);
        });

        it("compactNumber(1234567890) => [1.23, 3]", () => {
            const actual = compactNumber(1234567890);
            expect(actual).toStrictEqual([1.23, 3]);
        });
    });
});
