import { toArrayAsync } from "../iterable";
import { parseJsonLines, parseJsonLinesAsync, toJsonLine } from "./json-lines";

describe("test toJsonLine()", () => {
    it("toJsonLine(object) should return correct JSON line", () => {
        const actual = toJsonLine({
            package: "uuid",
            versions: ["1.0.0", "2.0.0-alpha"],
            size: 8273453,
            released: true,
        });
        expect(actual).toEqual(
            '{"package":"uuid","versions":["1.0.0","2.0.0-alpha"],"size":8273453,"released":true}\n'
        );
    });

    it("toJsonLine(string) should return correct JSON line", () => {
        const actual = toJsonLine("text");
        expect(actual).toEqual('"text"\n');
    });    
});

describe("test parseJsonLines()", () => {
    const sampleJsonLines = [
        `{ "id": "1", "ip": "10.0.0.0", "score": 1.7 }`,
        `{ "id": "2", "ip": "10.0.0.1", "score": 10.2 }`,
        `{ "id": "3", "ip": "10.0.0.2", "score": 8.3 }`,
    ];

    it("Parse JSON lines (stream) should return correct objects", () => {
        const actual = Array.from(parseJsonLines(sampleJsonLines));
        expect(actual).toStrictEqual([
            { id: "1", ip: "10.0.0.0", score: 1.7 },
            { id: "2", ip: "10.0.0.1", score: 10.2 },
            { id: "3", ip: "10.0.0.2", score: 8.3 },
        ]);
    });    
});

describe("test parseJsonLinesAsync()", () => {
    async function* asyncReadLines() {
        yield `{ "id": "1", "ip": "10.0.0.0", "score": 1.7 }`;
        await Promise.resolve();
        yield `{ "id": "2", "ip": "10.0.0.1", "score": 10.2 }`;
        await Promise.resolve();
        yield `{ "id": "3", "ip": "10.0.0.2", "score": 8.3 }`;
    }

    it("Parse JSON lines (async stream) should return a correct list of objects", async () => {
        const actual = parseJsonLinesAsync(asyncReadLines());
        expect(await toArrayAsync(actual)).toStrictEqual([
            { id: "1", ip: "10.0.0.0", score: 1.7 },
            { id: "2", ip: "10.0.0.1", score: 10.2 },
            { id: "3", ip: "10.0.0.2", score: 8.3 },
        ]);
    });
});
