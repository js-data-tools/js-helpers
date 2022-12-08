// Verify that import of main modules works
import { describe, it, expect } from "vitest";
import { reorderProperties } from ".";

describe("test transform re-exports: ", () => {
    it("transform: reorderProperties", () => {
        expect(reorderProperties).toBeTypeOf("function");
    });
});