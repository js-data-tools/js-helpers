import {
    alwaysTrue,
    and,
    isEmptyArray,
    isEmptyMap,
    isEmptyObject,
    isEmptySet,
    isNonEmptyArray,
    isNonEmptyMap,
    isNonEmptyObject,
    isNonEmptySet,
    isNullOrUndefined,
    not,
    notNullOrUndefined,
    or,
} from "./predicates";

describe("test predicates", () => {
    describe("test and<> predicates", () => {
        it("and() predicate calls second condition if the first one returns true", () => {
            const condition = jest.fn((x) => x > 0);
            const predicate = and((x) => typeof x === "number", condition);

            const actual = predicate(2);
            expect(actual).toBeTruthy();
            expect(condition).toHaveBeenCalled();
        });

        it("and() predicate stops after first condition that returns false", () => {
            const condition = jest.fn((x) => x > 0);
            const predicate = and((x) => typeof x === "number", condition);

            const actual = predicate("2");
            expect(actual).toBeFalsy();
            expect(condition).not.toHaveBeenCalled();
        });

        it("and() skips null and undefined conditions", () => {
            const condition = jest.fn((x) => x > 0);
            const predicate = and(null, (x) => typeof x === "number", undefined, condition);

            const actual = predicate(2);
            expect(actual).toBeTruthy();
            expect(condition).toHaveBeenCalled();
        });

        it("and() with a single argument returns it instead of creating a new function", () => {
            const condition = jest.fn((x) => x > 0);
            const predicate = and(condition);

            expect(predicate).toBe(condition);
        });

        it("and() without arguments returns the 'alwaysTrue' predicate", () => {
            const predicate = and();
            expect(predicate).toBe(alwaysTrue);
        });
    });

    describe("test or<> predicates", () => {
        it("or() predicate calls second condition if the first one returns false", () => {
            const condition = jest.fn((x) => x > 10);
            const predicate = or((x) => x < 2, condition);

            const actual = predicate(2);
            expect(actual).toBeFalsy();
            expect(condition).toHaveBeenCalled();
        });

        it("or() predicate stops after first condition that returns true", () => {
            const condition = jest.fn((x) => x > 10);
            const predicate = or((x) => x < 2, condition);

            const actual = predicate(1);
            expect(actual).toBeTruthy();
            expect(condition).not.toHaveBeenCalled();
        });

        it("or() skips null and undefined conditions", () => {
            const condition = jest.fn((x) => x > 10);
            const predicate = or(null, (x) => x < 2, undefined, condition);

            const actual = predicate(11);
            expect(actual).toBeTruthy();
            expect(condition).toHaveBeenCalled();
        });

        it("or() with a single argument returns it instead of creating a new function", () => {
            const condition = jest.fn((x) => x > 0);
            const predicate = or(condition);

            expect(predicate).toBe(condition);
        });

        it("or() without arguments returns the 'alwaysTrue' predicate", () => {
            const predicate = or();
            expect(predicate).toBe(alwaysTrue);
        });
    });

    describe("test not<> predicates", () => {
        it("not() inverts result", () => {
            const predicate = not((x: boolean) => x);

            const notTrue = predicate(true);
            expect(notTrue).toBeFalsy();

            const notFalse = predicate(false);
            expect(notFalse).toBeTruthy();
        });
    });

    describe("check trivial predicates", () => {
        it("alwaysTrue(null) should return true", () => {
            const actual = alwaysTrue(null);
            expect(actual).toBeTruthy();
        });
    });

    describe("test isNullOrUndefined() and notNullOrUndefined()", () => {
        it("isNullOrUndefined(null) should return true", () => {
            const actual = isNullOrUndefined(null);
            expect(actual).toBeTruthy();
        });

        it("isNullOrUndefined(undefined) should return true", () => {
            const actual = isNullOrUndefined(undefined);
            expect(actual).toBeTruthy();
        });

        it("isNullOrUndefined('') should return false", () => {
            const actual = isNullOrUndefined("");
            expect(actual).toBeFalsy();
        });

        it("notNullOrUndefined(null) should return false", () => {
            const actual = notNullOrUndefined(null);
            expect(actual).toBeFalsy();
        });

        it("notNullOrUndefined(undefined) should return false", () => {
            const actual = notNullOrUndefined(undefined);
            expect(actual).toBeFalsy();
        });

        it("notNullOrUndefined('') should return true", () => {
            const actual = notNullOrUndefined("");
            expect(actual).toBeTruthy();
        });
    });

    describe("test isEmptyArray()", () => {
        it("isEmptyArray(null) should return true", () => {
            const actual = isEmptyArray(null);
            expect(actual).toBeTruthy();
        });

        it("isEmptyArray(undefined) should return true", () => {
            const actual = isEmptyArray(undefined);
            expect(actual).toBeTruthy();
        });

        it("isEmptyArray([]) should return true", () => {
            const actual = isEmptyArray([]);
            expect(actual).toBeTruthy();
        });

        it("isEmptyArray([1]) should return false", () => {
            const actual = isEmptyArray([1]);
            expect(actual).toBeFalsy();
        });

        it("isEmptyArray(object) should return false", () => {
            const value = { length: 1 };
            const actual = isEmptyArray(value as Array<number>);
            expect(actual).toBeFalsy();
        });
    });

    describe("test isNonEmptyArray()", () => {
        it("isNonEmptyArray(null) should return false", () => {
            const actual = isNonEmptyArray(null);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyArray(undefined) should return false", () => {
            const actual = isNonEmptyArray(undefined);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyArray([]) should return false", () => {
            const actual = isNonEmptyArray([]);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyArray([1]) should return true", () => {
            const actual = isNonEmptyArray([1]);
            expect(actual).toBeTruthy();
        });

        it("isNonEmptyArray(object) should return false", () => {
            const value = { length: 1 };
            const actual = isNonEmptyArray(value as Array<number>);
            expect(actual).toBeFalsy();
        });
    });

    describe("test isEmptySet()", () => {
        it("isEmptySet(null) should return true", () => {
            const actual = isEmptySet(null);
            expect(actual).toBeTruthy();
        });

        it("isEmptySet(undefined) should return true", () => {
            const actual = isEmptySet(undefined);
            expect(actual).toBeTruthy();
        });

        it("isEmptySet(new Set()) should return true", () => {
            const actual = isEmptySet(new Set());
            expect(actual).toBeTruthy();
        });

        it("isEmptySet(new Set([1])) should return false", () => {
            const actual = isEmptySet(new Set([1]));
            expect(actual).toBeFalsy();
        });
    });

    describe("test isNonEmptySet()", () => {
        it("isNonEmptySet(null) should return false", () => {
            const actual = isNonEmptySet(null);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptySet(undefined) should return false", () => {
            const actual = isNonEmptySet(undefined);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptySet(new Set()) should return false", () => {
            const actual = isNonEmptySet(new Set());
            expect(actual).toBeFalsy();
        });

        it("isNonEmptySet(new Set([1])) should return true", () => {
            const actual = isNonEmptySet(new Set([1]));
            expect(actual).toBeTruthy();
        });
    });

    describe("test isEmptyMap()", () => {
        it("isEmptyMap(null) should return true", () => {
            const actual = isEmptyMap(null);
            expect(actual).toBeTruthy();
        });

        it("isEmptyMap(undefined) should return true", () => {
            const actual = isEmptyMap(undefined);
            expect(actual).toBeTruthy();
        });

        it("isEmptyMap(new Set()) should return true", () => {
            const actual = isEmptyMap(new Map());
            expect(actual).toBeTruthy();
        });

        it("isEmptyMap(new Map([[1,1]])) should return false", () => {
            const actual = isEmptyMap(new Map([[1, 1]]));
            expect(actual).toBeFalsy();
        });
    });

    describe("test isNonEmptyMap()", () => {
        it("isNonEmptyMap(null) should return false", () => {
            const actual = isNonEmptyMap(null);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyMap(undefined) should return false", () => {
            const actual = isNonEmptyMap(undefined);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyMap(new Map()) should return false", () => {
            const actual = isNonEmptyMap(new Map());
            expect(actual).toBeFalsy();
        });

        it("isEmptyMap(new Map([[1,1]])) should return true", () => {
            const actual = isNonEmptyMap(new Map([[1, 1]]));
            expect(actual).toBeTruthy();
        });
    });

    describe("test isEmptyObject()", () => {
        it("isEmptyObject(null) should return true", () => {
            const actual = isEmptyObject(null);
            expect(actual).toBeTruthy();
        });

        it("isEmptyObject(undefined) should return true", () => {
            const actual = isEmptyObject(undefined);
            expect(actual).toBeTruthy();
        });

        it("isEmptyObject({}) should return true", () => {
            const actual = isEmptyObject({});
            expect(actual).toBeTruthy();
        });

        it("isEmptyObject({ prop: 1 })) should return false", () => {
            const actual = isEmptyObject({ prop: 1 });
            expect(actual).toBeFalsy();
        });
    });

    describe("test isNonEmptyObject()", () => {
        it("isNonEmptyObject(null) should return false", () => {
            const actual = isNonEmptyObject(null);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyObject(undefined) should return true", () => {
            const actual = isNonEmptyObject(undefined);
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyObject({}) should return true", () => {
            const actual = isNonEmptyObject({});
            expect(actual).toBeFalsy();
        });

        it("isNonEmptyObject({ prop: 1 })) should return false", () => {
            const actual = isNonEmptyObject({ prop: 1 });
            expect(actual).toBeTruthy();
        });
    });
});
