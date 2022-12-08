import { describe, it, expect } from "vitest";
import { orderNames, reorderProperties } from "./objects";

describe("Test orderNames", () => {
    it("given non-empty options.first, pushes them to the head, leaving others in the same order", () => {
        const input = ["a", "b", "c", "d", "e"];
        const actual = orderNames(input, { first: ["d", "k", "b"] });
        expect(actual).toStrictEqual(["d", "b", "a", "c", "e"]);
    });

    it("given non-empty options.last, pushes them to the tail, leaving others in the same order", () => {
        const input = ["a", "b", "c", "d", "e"];
        const actual = orderNames(input, { last: ["d", "k", "b"] });
        expect(actual).toStrictEqual(["a", "c", "e", "d", "b"]);
    });

    it("given non-empty options.last and options.last, re-orders properties accordingly, giving priority to first", () => {
        const input = ["a", "b", "c", "d", "e"];
        const actual = orderNames(input, { first: ["b", "c"], last: ["b", "d"] });
        expect(actual).toStrictEqual(["b", "c", "a", "e", "d"]);
    });

    it("given options.sort set to true, sort names in the ascending order", () => {
        const input = ["b", "c", "a", "e", "d"];
        const actual = orderNames(input, { sort: true });
        expect(actual).toStrictEqual(["a", "b", "c", "d", "e"]);
    });

    it("given options.sort and options.descendingSort set to true, sort names in the descending order", () => {
        const input = ["b", "c", "a", "e", "d"];
        const actual = orderNames(input, { sort: true, sortDescending: true });
        expect(actual).toStrictEqual(["e", "d", "c", "b", "a"]);
    });

    it("given options.first, options.last and options.sort, re-order names correctly", () => {
        const input = ["b", "c", "a", "e", "d"];
        const actual = orderNames(input, { first: ["e"], last: ["c"], sort: true });
        expect(actual).toStrictEqual(["e", "a", "b", "d", "c"]);
    });
});

describe("Test reorderProperties", () => {
    it("given first, last and sort options, should return a new object with correct order of properties", () => {
        const actual = reorderProperties(
            { version: "1.0.0", name: "js-helpers", author: "Sergey", license: "MIT", main: "index.js", files: ["dist"] },
            { first: ["name", "version"], last: ["license"], sort: true }
        );
        expect(JSON.stringify(actual)).toBe('{"name":"js-helpers","version":"1.0.0","author":"Sergey","files":["dist"],"main":"index.js","license":"MIT"}');
    });

    it("update object in-place", () => {
        const source = { version: "1.0.0", name: "js-helpers", author: "Sergey", license: "MIT", main: "index.js", files: ["dist"] };
        const actual = reorderProperties(source, { first: ["name", "version"], last: ["license"], sort: true }, true);
        expect(actual).toBe(source); // Return value should be the same as source
        expect(JSON.stringify(source)).toBe('{"name":"js-helpers","version":"1.0.0","author":"Sergey","files":["dist"],"main":"index.js","license":"MIT"}');
    });

    it("empty options and omitted inplace param should return the same object", () => {
        const source = { version: "1.0.0", name: "js-helpers"};
        const actual = reorderProperties(source, { first: [], last: [], sort: false});
        expect(actual).toBe(source);
    });

    it("empty options and inplace set to false should return a clone of the source object", () => {
        const source = { version: "1.0.0", name: "js-helpers"};
        const actual = reorderProperties(source, {}, false);
        expect(actual).not.toBe(source);
        expect(JSON.stringify(source)).toBe('{"version":"1.0.0","name":"js-helpers"}');
    });
});
