// Verify that import of main modules works
import { describe, it, expect } from "vitest";
import { ipv4AsNumber, map, filter, parseJsonLines, isEmptyMap, ignoreDefaults, reorderProperties } from ".";

describe("test re-exports: ", () => {
    it("convert: ipv4AsNumber", () => {
        expect(ipv4AsNumber).toBeTypeOf("function");
    });

    it("iterable: map", () => {
        expect(map).toBeTypeOf("function");
    });

    it("iterable: filter", () => {
        expect(filter).toBeTypeOf("function");
    });

    it("json: parseJsonLines", () => {
        expect(parseJsonLines).toBeTypeOf("function");
    });

    it("serialize/normalize: ignoreDefaults", () => {
        expect(ignoreDefaults).toBeTypeOf("function");
    });
    
    it("serialize/normalize: reorderProperties", () => {
        expect(reorderProperties).toBeTypeOf("function");
    });

    it("predicates: isEmptyMap", () => {
        expect(isEmptyMap).toBeTypeOf("function");
    });
});