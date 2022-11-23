import { map, mapAsync } from "../iterable";

/**
 * Parses an NDJSON stream
 * 
 * @since 1.0.0
 * @category json
 * @param {Iterable<string>} textLines - The enumerable collection of text lines to parse - every entry is supposed to be a valid JSON text to parse
 * @param {(this: any, key: string, value: any) => any} [reviver] An optional reviver object (see {@link JSON#parse})
 * @returns {Iterable<T>} An iterable collection of parsed values.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseJsonLines<T>(textLines: Iterable<string>, reviver?: (this: any, key: string, value: any) => any): Iterable<T> {
    return map(textLines, (line: string) => <T>JSON.parse(line, reviver));
}

/**
 * Parses an asynchronous NDJSON stream
 * 
 * @since 1.0.0
 * @category json
 * @param {AsyncIterable<string>} textLines - The enumerable async stream of text lines to parse - every entry is supposed to be a valid JSON.
 * @param {(this: any, key: string, value: any) => any} [reviver] An optional reviver object (see {@link JSON#parse})
 * @returns {AsyncIterable<T>} An iterable asynchronous stream of parsed values.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseJsonLinesAsync<T>(textLines: AsyncIterable<string>, reviver?: (this: any, key: string, value: any) => any): AsyncIterable<T> {
    return mapAsync(textLines, (line: string) => <T>JSON.parse(line, reviver));
}

/**
 * Render the given value as an NDJSON entry: a JSON without whitespaces, followed by a line break.
 * 
 * @since 1.0.0
 * @category json
 * @param value - The value to render as an NDJSON (JSON line).
 * @returns {string} A string with JSON representation of the given value (no whitespaces or line breaks in the middle), followed by a line break.
 * @example
 * 
 * toJsonLine([
 *   {
 *     name: "John",
 *     age: 23,
 *     male: true
 *   },
 *   {
 *     name: "Mary",
 *     age: 21
 *   }
 * ]);
 * 
 * // => `[{"name":"John","age":23,"male":true},{"name":"Mary","age":21}]`
 */
export function toJsonLine(value: unknown): string {
    return JSON.stringify(value) + "\n";
}
