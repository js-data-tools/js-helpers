import { describe, it, expect } from "vitest";
import { map, mapAsync } from "./map";

const packages = [
    {
        name: "uuid",
        versions: [
            "0.0.1",
            "0.0.2",
            "1.4.0",
            "1.4.1",
            "1.4.2",
            "2.0.0",
            "2.0.1",
            "2.0.2",
            "2.0.3",
            "3.0.0",
            "3.0.1",
            "3.1.0",
            "3.2.0",
            "3.2.1",
            "3.3.0",
            "3.3.2",
            "3.3.3",
            "3.4.0",
            "7.0.0-beta.0",
            "7.0.0",
            "7.0.1",
            "7.0.2-beta.0",
            "7.0.2",
            "7.0.3",
            "8.0.0-beta.0",
            "8.0.0",
            "8.1.0",
            "8.2.0-beta.0",
            "8.2.0",
            "8.3.0-beta.0",
            "8.3.0",
            "8.3.1",
            "8.3.2-beta.0",
            "8.3.2",
            "9.0.0-beta.0",
            "9.0.0",
        ],
    },
    {
        name: "faker",
        versions: [
            "1.0.0",
            "1.0.1",
            "1.1.0",
            "2.0.0",
            "2.0.1",
            "2.0.2",
            "2.0.3",
            "2.1.0",
            "2.1.1",
            "2.1.2",
            "2.1.3",
            "2.1.4",
            "2.1.5",
            "3.0.0",
            "3.0.1",
            "3.1.0",
            "4.0.0",
            "4.1.0",
            "5.0.0",
            "5.1.0",
            "5.2.0",
            "5.3.0",
            "5.3.1",
            "5.4.0",
            "5.5.0",
            "5.5.1",
            "5.5.2",
            "5.5.3",
            "6.6.6",
        ],
    },
];

async function* loadPackageVersions() {
    // This function mimics asynchronous loading of version info from the npm
    yield packages[0];
    yield packages[1];
}

describe("test map()", () => {
    it("map() selects field", () => {
        const actual = [...map(packages, (p) => p.name)];
        expect(actual).toEqual(["uuid", "faker"]);
    });

    it("map() selects calculated value", () => {
        const actual = [...map(packages, (p) => p.versions?.length || 0)];
        expect(actual).toEqual([36, 29]);
    });
});

describe("test mapAsync()", () => {
    it("mapAsync() selects field", async () => {
        const actual = [];
        for await (const name of mapAsync(loadPackageVersions(), (p) => p.name)) {
            actual.push(name);
        }
        expect(actual).toEqual(["uuid", "faker"]);
    });
});
