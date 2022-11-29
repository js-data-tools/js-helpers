import { describe, it, expect } from "vitest";
import { toArrayAsync } from "./toArray";

async function* providePackageNames() {
    // This function mimics asynchronous loading of version info from the npm
    yield await Promise.resolve("uuid");
    yield await Promise.resolve("faker");
}

describe("test mapAsync()", () => {
    it("mapAsync() selects field", async () => {
        const actual = await toArrayAsync(providePackageNames());
        expect(actual).toEqual(["uuid", "faker"]);
    });
});
