import { describe, it, expect } from "vitest";
import { ignoreDefaults, ignoreEmpty } from "./serialize";

describe("Test JSON.stringify with ignoreEmpty and ignoreDefaults", () => {
    it("ignoreEmpty should remove empty values and keep non-empty", () => {
        const actual = JSON.stringify(
            {
                major: 1,
                minor: 0, // Not empty
                patch: undefined, // Empty
                revision: "", // Empty
                final: false, // Not empty
                author: "Sergey",
                scope: null, // Empty
                reviewers: [], // Empty
                coverage: {}, // Empty
            },
            ignoreEmpty
        );
        expect(actual).toBe('{"major":1,"minor":0,"final":false,"author":"Sergey"}');
    });

    it("ignoreEmpty - example from the README.md", () => {
        const input = {
            name: "js-helpers",
            private: false,
            author: "",
            files: [],
            dependencies: {},
            devDependencies: undefined,
        };
        const actual = JSON.stringify(input, ignoreEmpty);
        expect(actual).toBe('{"name":"js-helpers","private":false}');
    });

    it("ignoreDefaults should remove default values and keep non-empty", () => {
        const actual = JSON.stringify(
            {
                major: 1,
                minor: 0, // Default
                patch: undefined, // Default
                revision: "", // Default
                final: false, // Default
                author: "Sergey",
                scope: null, // Default
                reviewers: [], // Default
                coverage: {}, // Default
            },
            ignoreDefaults
        );
        expect(actual).toBe('{"major":1,"author":"Sergey"}');
    });

    it("ignoreDefaults - example from the README.md", () => {
        const input = {
            name: "js-helpers",
            private: false,
            major: 1,
            minor: 0,
            author: "",
            files: [],
            dependencies: {},
            devDependencies: undefined,
        };
        const actual = JSON.stringify(input, ignoreDefaults);
        expect(actual).toBe('{"name":"js-helpers","major":1}');
    });
});
