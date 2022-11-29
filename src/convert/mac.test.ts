import { describe, it, expect } from "vitest";
import { macAddressAsNumber, macAddressAsString } from "./mac";

describe("test macAddressAsNumber()", () => {
    it("macAddressAsNumber(number) returns parameter without changes", () => {
        const actual = macAddressAsNumber(45459793942);
        expect(actual).toEqual(45459793942);
    });

    it("macAddressAsNumber(BigInt) returns parameter without changes", () => {
        const actual = macAddressAsNumber(BigInt(45459793942));
        expect(actual).toEqual(BigInt(45459793942));
    });

    it("macAddressAsNumber(string with colons) returns correct MAC address", () => {
        const actual = macAddressAsNumber("00:0a:95:9d:68:16");
        expect(actual).toEqual(BigInt(45459793942));
    });

    it("macAddressAsNumber(string with dashes) returns correct MAC address", () => {
        const actual = macAddressAsNumber("00-0a-95-9d-68-16");
        expect(actual).toEqual(BigInt(45459793942));
    });
});

describe("test macAddressAsString()", () => {
    it('macAddressAsString(number, ":") returns correct MAC address string', () => {
        const actual = macAddressAsString(BigInt(45459793942), ":");
        expect(actual).toEqual("00:0a:95:9d:68:16");
    });

    it('macAddressAsString(number, "-") returns correct MAC address string', () => {
        const actual = macAddressAsString(BigInt(45459793942), "-");
        expect(actual).toEqual("00-0a-95-9d-68-16");
    });

    it('macAddressAsString(number, "") returns correct MAC address string', () => {
        const actual = macAddressAsString(BigInt(45459793942), "");
        expect(actual).toEqual("000a959d6816");
    });

    it('macAddressAsString("00:0a:95:9d:68:16", "-") replaces delimiters', () => {
        const actual = macAddressAsString("00:0a:95:9d:68:16", "-");
        expect(actual).toEqual("00-0a-95-9d-68-16");
    });

    it('macAddressAsString("00:0a:95:9d:68:16", ":") keeps delimiters', () => {
        const actual = macAddressAsString("00:0a:95:9d:68:16", ":");
        expect(actual).toEqual("00:0a:95:9d:68:16");
    });

    it('macAddressAsString("00:0a:95:9d:68:16", "") removed delimiters', () => {
        const actual = macAddressAsString("00:0a:95:9d:68:16", "");
        expect(actual).toEqual("000a959d6816");
    });

    it('macAddressAsString("000a959d6816", ":") inserts delimiters', () => {
        const actual = macAddressAsString("000a959d6816", ":");
        expect(actual).toEqual("00:0a:95:9d:68:16");
    });

    it('macAddressAsString("000a959d6816", "") returns the same string', () => {
        const actual = macAddressAsString("000a959d6816", "");
        expect(actual).toEqual("000a959d6816");
    });

    it("macAddressAsString throws error if input string is of wrong length", () => {
        expect(() => macAddressAsString("12345")).toThrowError();
    });

    it("macAddressAsString throws error if input is not string / bigint", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const callback: (input: any) => string = macAddressAsString;
        expect(() => callback({ mac: "12345" })).toThrowError();
    });
});
