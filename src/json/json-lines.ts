import { map, mapAsync } from "../iterable";

/**
 * Parses an NDJSON stream
 * 
 * @since 1.0.0
 * @category json
 * @param {Iterable<string>} textLines - The enumerable collection of text lines to parse - every entry is supposed to be a valid JSON text to parse
 * @param {(this: any, key: string, value: any) => any} [reviver] An optional reviver object (see @see JSON.parse)
 * @returns {Iterable<T>} The iterable collection of parsed objects (optimized for streaming)
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
 * @param {AsyncIterable<string>} textLines Enumerable collection of text lines to parse (async) - every entry is supposed to be a valid JSON text to parse
 * @param {(this: any, key: string, value: any) => any} [reviver] An optional reviver object (see @see JSON.parse)
 * @returns {AsyncIterable<T>} The iterable collection of parsed objects (optimized for streaming)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseJsonLinesAsync<T>(textLines: AsyncIterable<string>, reviver?: (this: any, key: string, value: any) => any): AsyncIterable<T> {
    return mapAsync(textLines, (line: string) => <T>JSON.parse(line, reviver));
}

/**
 * Renders a given value as JSON line (NDJSON format)
 * 
 * @since 1.0.0
 * @category json
 * @param value The value to render as a JSON line
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
