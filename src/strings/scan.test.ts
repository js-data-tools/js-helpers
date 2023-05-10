import { describe, it, expect } from "vitest";
import { skipPairsUntil, CHAR_CODE_CLOSE_PAREN } from "./scan";

describe("Test skipPairsUntil", () => {
    it("skipPairsUntil matches correct closing symbol, skipping strings and nested groups", () => {
        const actual = skipPairsUntil(`({"a)": 1, "b": [(1+1)], 'c)': 3})`, 1, CHAR_CODE_CLOSE_PAREN);
        expect(actual).toBe(33);
    });

    it("skipPairsUntil matches symbol immediately after quoted string", () => {
        const actual = skipPairsUntil(`")"))`, 0, CHAR_CODE_CLOSE_PAREN);
        expect(actual).toBe(3);
    });

    it("skipPairsUntil fails if closing brace does not match the opening one", () => {
        expect(() => skipPairsUntil("a[]", 2, CHAR_CODE_CLOSE_PAREN)).toThrow();
    });

    it("skipPairsUntil returns source.length if opening and closing braces do not match", () => {
        const actual = skipPairsUntil(`[a)aaa`, 0, CHAR_CODE_CLOSE_PAREN, false);
        expect(actual).toBe(6);
    });

    it("skipPairsUntil fails if opening and closing braces do not match", () => {
        expect(() => skipPairsUntil(`[a)aaa`, 0, CHAR_CODE_CLOSE_PAREN)).toThrow();
    });

    it("skipPairsUntil returns source.length if there braces are not closed", () => {
        const actual = skipPairsUntil(`{aaaa`, 0, CHAR_CODE_CLOSE_PAREN, false);
        expect(actual).toBe(5);
    });

    it("skipPairsUntil fails if there braces are not closed", () => {
        expect(() => skipPairsUntil(`{aa`, 0, CHAR_CODE_CLOSE_PAREN)).toThrow();
    });

    it("skipPairsUntil skips quoted string", () => {
        const actual = skipPairsUntil(`"aaaa"+`, 0, '+');
        expect(actual).toBe(6);
    });

    it("skipPairsUntil skips quoted string with escaped quote in it", () => {
        const actual = skipPairsUntil(`"aa\\"aa"+`, 0, '+');
        expect(actual).toBe(8);
    });

    it("skipPairsUntil skips quoted string with apostrophe in it", () => {
        const actual = skipPairsUntil(`"aa'aa"+`, 0, '+');
        expect(actual).toBe(7);
    });

    it("skipPairsUntil returns source.length if quotes were not closed", () => {
        const actual = skipPairsUntil(`"aaaa+`, 0, '+');
        expect(actual).toBe(6);
    });

    it("skipPairsUntil can accept callback predicate", () => {
        const actual = skipPairsUntil(`abc1d"+`, 0, (x) => x >= 48 && x <= 57);
        expect(actual).toBe(3);
    });

});