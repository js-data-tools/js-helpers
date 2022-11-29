import { describe, it, expect } from "vitest";
import {
    filter,
    skip,
    skipUntil,
    skipWhile,
    take,
    takeUntil,
    takeWhile,
    filterAsync,
    skipAsync,
    skipUntilAsync,
    skipWhileAsync,
    takeAsync,
    takeUntilAsync,
    takeWhileAsync,
} from "./select";
import { toArrayAsync } from "./toArray";

describe("test filter()", () => {
    it("filter([0, -7, 2, -1, 5, 1, -5], x => x > 1) selects correct values ([2,5])", () => {
        const actual = [...filter([0, -7, 2, -1, 5, 1, -5], (x) => x > 1)];
        expect(actual).toEqual([2, 5]);
    });

    it("filter() without predicate returns collection as-is", () => {
        const actual = [...filter([0, -7, 2, -1, 5, 1, -5])];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("filter() without input returns empty iterable", () => {
        const actual = [...filter(null)];
        expect(actual).toEqual([]);
    });
});

describe("test skip()", () => {
    it("skip([...], 2) skips correct number of elements", () => {
        const actual = [...skip([0, -7, 2, -1, 5, 1, -5], 2)];
        expect(actual).toEqual([2, -1, 5, 1, -5]);
    });

    it("skip([...], 100) returns empty enumerable", () => {
        const actual = [...skip([0, -7, 2, -1, 5, 1, -5], 100)];
        expect(actual).toEqual([]);
    });

    it("skip(null) returns an empty enumerable", () => {
        const actual = [...skip(null, 0)];
        expect(actual).toEqual([]);
    });
});

describe("test skipWhile()", () => {
    it("skipWhile([0, -7, 2, -1, 5, 1, -5], x => x <= 0) skips 2 elements", () => {
        const actual = [...skipWhile([0, -7, 2, -1, 5, 1, -5], (x) => x <= 0)];
        expect(actual).toEqual([2, -1, 5, 1, -5]);
    });

    it("skipWhile([0, -7, 2, -1, 5, 1, -5], x => typeof(x) === 'number') skips all elements", () => {
        const actual = [...skipWhile([0, -7, 2, -1, 5, 1, -5], (x) => typeof x === "number")];
        expect(actual).toEqual([]);
    });

    it("skipWhile([0, -7, 2, -1, 5, 1, -5], x => x < 0) skips nothing", () => {
        const actual = [...skipWhile([0, -7, 2, -1, 5, 1, -5], (x) => x < 0)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipWhile() without predicate returns the original collection", () => {
        const actual = [...skipWhile([0, -7, 2, -1, 5, 1, -5], null)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipWhile() without input returns an empty enumerable", () => {
        const actual = [...skipWhile(undefined, undefined)];
        expect(actual).toEqual([]);
    });
});

describe("test skipUntil()", () => {
    it("skipUntil([0, -7, 2, -1, 5, 1, -5], x => x > 0) skips 2 elements", () => {
        const actual = [...skipUntil([0, -7, 2, -1, 5, 1, -5], (x) => x > 0)];
        expect(actual).toEqual([2, -1, 5, 1, -5]);
    });

    it("skipUntil([0, -7, 2, -1, 5, 1, -5], x => x > 100) skips all elements", () => {
        const actual = [...skipUntil([0, -7, 2, -1, 5, 1, -5], (x) => x > 100)];
        expect(actual).toEqual([]);
    });

    it("skipUntil([0, -7, 2, -1, 5, 1, -5], x => x <= 0) skips nothing", () => {
        const actual = [...skipUntil([0, -7, 2, -1, 5, 1, -5], (x) => x <= 0)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipUntil() without predicate returns the original collection", () => {
        const actual = [...skipUntil([0, -7, 2, -1, 5, 1, -5], null)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipUntil() without input returns an empty enumerable", () => {
        const actual = [...skipUntil(undefined, undefined)];
        expect(actual).toEqual([]);
    });
});

describe("test take()", () => {
    it("take([0, -7, 2, -1, 5, 1, -5], 2) returns first two elements", () => {
        const actual = [...take([0, -7, 2, -1, 5, 1, -5], 2)];
        expect(actual).toEqual([0, -7]);
    });

    it("take([0, -7, 2, -1, 5, 1, -5], 100) returns the whole collection", () => {
        const actual = [...take([0, -7, 2, -1, 5, 1, -5], 100)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("take([0, -7, 2, -1, 5, 1, -5], 0) returns empty enumerable", () => {
        const actual = [...take([0, -7, 2, -1, 5, 1, -5], 0)];
        expect(actual).toEqual([]);
    });

    it("take(null) returns an empty enumerable", () => {
        const actual = [...take(null, 0)];
        expect(actual).toEqual([]);
    });
});

describe("test takeWhile()", () => {
    it("takeWhile([0, -7, 2, -1, 5, 1, -5], x => x <= 0) takes 2 elements", () => {
        const actual = [...takeWhile([0, -7, 2, -1, 5, 1, -5], (x) => x <= 0)];
        expect(actual).toEqual([0, -7]);
    });

    it("takeWhile([0, -7, 2, -1, 5, 1, -5], x => typeof(x) === 'number') takes all elements", () => {
        const actual = [...takeWhile([0, -7, 2, -1, 5, 1, -5], (x) => typeof x === "number")];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeWhile([0, -7, 2, -1, 5, 1, -5], x => x < 0) takes nothing", () => {
        const actual = [...takeWhile([0, -7, 2, -1, 5, 1, -5], (x) => x < 0)];
        expect(actual).toEqual([]);
    });

    it("takeWhile() without a predicate returns the original collection", () => {
        const actual = [...takeWhile([0, -7, 2, -1, 5, 1, -5], null)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeWhile() without input returns an empty enumerable", () => {
        const actual = [...takeWhile(undefined, undefined)];
        expect(actual).toEqual([]);
    });
});

describe("test takeUntil()", () => {
    it("takeUntil([0, -7, 2, -1, 5, 1, -5], x => x > 2) takes first 4 elements", () => {
        const actual = [...takeUntil([0, -7, 2, -1, 5, 1, -5], (x) => x > 2)];
        expect(actual).toEqual([0, -7, 2, -1]);
    });

    it("takeUntil([0, -7, 2, -1, 5, 1, -5], x => typeof(x) === 'number') returns empty iterable", () => {
        const actual = [...takeUntil([0, -7, 2, -1, 5, 1, -5], (x) => typeof x === "number")];
        expect(actual).toEqual([]);
    });

    it("takeUntil([0, -7, 2, -1, 5, 1, -5], x => x > 100) returns the whole collection", () => {
        const actual = [...takeUntil([0, -7, 2, -1, 5, 1, -5], (x) => x > 100)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeUntil() without a predicate returns the original collection", () => {
        const actual = [...takeUntil([0, -7, 2, -1, 5, 1, -5], null)];
        expect(actual).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeUntil() without input returns an empty enumerable", () => {
        const actual = [...takeUntil(undefined, undefined)];
        expect(actual).toEqual([]);
    });
});

//-------------------------------------------------------------------------------------------
// Async version
//-------------------------------------------------------------------------------------------
async function* asyncNumbers() {
    yield await Promise.resolve(0);
    yield await Promise.resolve(-7);
    yield await Promise.resolve(2);
    yield await Promise.resolve(-1);
    yield await Promise.resolve(5);
    yield await Promise.resolve(1);
    yield await Promise.resolve(-5);
}

describe("test filterAsync()", () => {
    it("filterAsync([0, -7, 2, -1, 5, 1, -5], x => x > 1) selects correct values ([2,5])", async () => {
        const actual = filterAsync(asyncNumbers(), (x) => x > 1);
        expect(await toArrayAsync(actual)).toEqual([2, 5]);
    });

    it("filterAsync() without predicate returns collection as-is", async () => {
        const actual = filterAsync(asyncNumbers());
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("filterAsync() without input returns empty iterable", async () => {
        const actual = filterAsync(null);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});

describe("test skipAsync()", () => {
    it("skipAsync([...], 2) skips correct number of elements", async () => {
        const actual = skipAsync(asyncNumbers(), 2);
        expect(await toArrayAsync(actual)).toEqual([2, -1, 5, 1, -5]);
    });

    it("skipAsync([...], 100) returns empty enumerable", async () => {
        const actual = skipAsync(asyncNumbers(), 100);
        expect(await toArrayAsync(actual)).toEqual([]);
    });

    it("skipAsync(null) returns an empty enumerable", async () => {
        const actual = skipAsync(null, 0);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});

describe("test skipWhileAsync()", () => {
    it("skipWhileAsync(asyncNumbers(), x => x <= 0) skips 2 elements", async () => {
        const actual = skipWhileAsync(asyncNumbers(), (x) => x <= 0);
        expect(await toArrayAsync(actual)).toEqual([2, -1, 5, 1, -5]);
    });

    it("skipWhileAsync(asyncNumbers(), x => typeof(x) === 'number') skips all elements", async () => {
        const actual = skipWhileAsync(asyncNumbers(), (x) => typeof x === "number");
        expect(await toArrayAsync(actual)).toEqual([]);
    });

    it("skipWhileAsync(asyncNumbers(), x => x < 0) skips nothing", async () => {
        const actual = skipWhileAsync(asyncNumbers(), (x) => x < 0);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipWhileAsync() without predicate returns the original collection", async () => {
        const actual = skipWhileAsync(asyncNumbers(), null);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipWhileAsync() without input returns an empty enumerable", async () => {
        const actual = skipWhileAsync(undefined, undefined);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});

describe("test skipUntilAsync()", () => {
    it("skipUntilAsync([0, -7, 2, -1, 5, 1, -5], x => x > 0) skips 2 elements", async () => {
        const actual = skipUntilAsync(asyncNumbers(), (x) => x > 0);
        expect(await toArrayAsync(actual)).toEqual([2, -1, 5, 1, -5]);
    });

    it("skipUntilAsync([0, -7, 2, -1, 5, 1, -5], x => x > 100) skips all elements", async () => {
        const actual = skipUntilAsync(asyncNumbers(), (x) => x > 100);
        expect(await toArrayAsync(actual)).toEqual([]);
    });

    it("skipUntilAsync([0, -7, 2, -1, 5, 1, -5], x => x <= 0) skips nothing", async () => {
        const actual = skipUntilAsync(asyncNumbers(), (x) => x <= 0);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipUntilAsync() without predicate returns the original collection", async () => {
        const actual = skipUntilAsync(asyncNumbers(), null);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("skipUntilAsync() without input returns an empty enumerable", async () => {
        const actual = skipUntilAsync(undefined, undefined);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});

describe("test takeAsync()", () => {
    it("takeAsync([0, -7, 2, -1, 5, 1, -5], 2) returns first two elements", async () => {
        const actual = takeAsync(asyncNumbers(), 2);
        expect(await toArrayAsync(actual)).toEqual([0, -7]);
    });

    it("takeAsync([0, -7, 2, -1, 5, 1, -5], 100) returns the whole collection", async () => {
        const actual = takeAsync(asyncNumbers(), 100);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeAsync([0, -7, 2, -1, 5, 1, -5], 0) returns empty enumerable", async () => {
        const actual = takeAsync(asyncNumbers(), 0);
        expect(await toArrayAsync(actual)).toEqual([]);
    });

    it("takeAsync(null) returns an empty enumerable", async () => {
        const actual = takeAsync(null, 0);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});

describe("test takeWhileAsync()", () => {
    it("takeWhileAsync([0, -7, 2, -1, 5, 1, -5], x => x <= 0) takes 2 elements", async () => {
        const actual = takeWhileAsync(asyncNumbers(), (x) => x <= 0);
        expect(await toArrayAsync(actual)).toEqual([0, -7]);
    });

    it("takeWhileAsync([0, -7, 2, -1, 5, 1, -5], x => typeof(x) === 'number') takes all elements", async () => {
        const actual = takeWhileAsync(asyncNumbers(), (x) => typeof x === "number");
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeWhileAsync([0, -7, 2, -1, 5, 1, -5], x => x < 0) takes nothing", async () => {
        const actual = takeWhileAsync(asyncNumbers(), (x) => x < 0);
        expect(await toArrayAsync(actual)).toEqual([]);
    });

    it("takeWhileAsync() without a predicate returns the original collection", async () => {
        const actual = takeWhileAsync(asyncNumbers(), null);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeWhileAsync() without input returns an empty enumerable", async () => {
        const actual = takeWhileAsync(undefined, undefined);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});

describe("test takeUntilAsync()", () => {
    it("takeUntilAsync([0, -7, 2, -1, 5, 1, -5], x => x > 2) takes first 4 elements", async () => {
        const actual = takeUntilAsync(asyncNumbers(), (x) => x > 2);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1]);
    });

    it("takeUntilAsync([0, -7, 2, -1, 5, 1, -5], x => typeof(x) === 'number') returns empty iterable", async () => {
        const actual = takeUntilAsync(asyncNumbers(), (x) => typeof x === "number");
        expect(await toArrayAsync(actual)).toEqual([]);
    });

    it("takeUntilAsync([0, -7, 2, -1, 5, 1, -5], x => x > 100) returns the whole collection", async () => {
        const actual = takeUntilAsync(asyncNumbers(), (x) => x > 100);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeUntilAsync() without a predicate returns the original collection", async () => {
        const actual = takeUntilAsync(asyncNumbers(), null);
        expect(await toArrayAsync(actual)).toEqual([0, -7, 2, -1, 5, 1, -5]);
    });

    it("takeUntilAsync() without input returns an empty enumerable", async () => {
        const actual = takeUntilAsync(undefined, undefined);
        expect(await toArrayAsync(actual)).toEqual([]);
    });
});
