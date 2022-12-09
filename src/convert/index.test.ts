// Verify that import of main modules works
import { describe, it, expect } from "vitest";
import { ipv4AsNumber, macAddressAsString, roundNumber } from ".";

describe("test convert re-exports: ", () => {
    it("ip: ipv4AsNumber", () => {
        expect(ipv4AsNumber).toBeTypeOf("function");
    });

    it("mac: macAddressAsString", () => {
        expect(macAddressAsString).toBeTypeOf("function");
    });

    it("numeric: roundNumber", () => {
        expect(roundNumber).toBeTypeOf("function");
    });
});
