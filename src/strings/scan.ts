export const CHAR_CODE_OPEN_PAREN = 40;
export const CHAR_CODE_CLOSE_PAREN = 41;
export const CHAR_CODE_OPEN_BRACKET = 91;
export const CHAR_CODE_CLOSE_BRACKET = 93;
export const CHAR_CODE_OPEN_BRACE = 123;
export const CHAR_CODE_CLOSE_BRACE = 125;
export const CHAR_CODE_QUOTE = 34;
export const CHAR_CODE_APOSTROPHE = 39;
export const CHAR_CODE_BACKTICK = 96;

export function skipUntilClosingQuote(text: string, start: number, quote: number): number {
    for (let i = start; i < text.length; ++i) {
        const current = text.charCodeAt(i);
        if (current === quote) {
            return i;
        }
        if (current == 92) {
            i++; // Skip escaped symbol
        }
    }
    return text.length;
}

/**
 * Finds the first occurrence of the specified symbol, skipping quoted strings and pairs of braces, parens and square brackets.
 * @category format
 * @param text - The string to scan.
 * @param start - The zero-based offset to start searching from.
 * @param symbol - The character to search (or a callback function that should return true if a symbol passed as parameter is the one being searched).
 * @param throwOnMismatch - Set to false to prevent throwing exception when opening and closing parenthesis / braces / brackets do not match.
 */
export function skipPairsUntil(text: string, start: number, symbol: number, throwOnMismatch?: boolean): number;
export function skipPairsUntil(text: string, start: number, symbol: string, throwOnMismatch?: boolean): number;
export function skipPairsUntil(text: string, start: number, match: ((x: number) => boolean), throwOnMismatch?: boolean): number;
export function skipPairsUntil(text: string, start: number, match: number | string | ((x: number) => boolean), throwOnMismatch?: boolean): number {
    const stack: number[] = [];
    if (typeof(match) === "string") {
        match = match.charCodeAt(0);
    }
    const matchSymbol = typeof(match) === "number" ? ((x:number) => x === match) : match;

    for (let i = start; i < text.length; ++i) {
        const current = text.charCodeAt(i);
        if (matchSymbol(current) && !stack.length) {
            return i;
        }

        switch (current) {
            case CHAR_CODE_OPEN_PAREN: // '('
                stack.push(CHAR_CODE_CLOSE_PAREN); // Wait for ')'
                break;
            case CHAR_CODE_OPEN_BRACKET: // '['
                stack.push(CHAR_CODE_CLOSE_BRACKET); // Wait for ']'
                break;
            case CHAR_CODE_OPEN_BRACE: // '{'
                stack.push(CHAR_CODE_CLOSE_BRACE); // Wait for '}'
                break;

            case CHAR_CODE_CLOSE_PAREN: // ')'
            case CHAR_CODE_CLOSE_BRACKET: // ']'
            case CHAR_CODE_CLOSE_BRACE: // '}'
                {
                    const pending = stack.pop();
                    if (pending != current) {
                        if (throwOnMismatch !== false) {
                            throw new Error(`Unexpected '${String.fromCharCode(current)}' at offset ${i}.  Expected '${pending ? String.fromCharCode(pending) : "(none)" }'`);
                        }
                        return text.length;
                    }
                }
                break;

            case CHAR_CODE_QUOTE: // '"'
            case CHAR_CODE_APOSTROPHE: // "'"
            case CHAR_CODE_BACKTICK: // "`"
                i = skipUntilClosingQuote(text, i + 1, current);
                if (i === text.length) {
                    return i;
                }
                break;
        }
    }
    
    if (throwOnMismatch !== false && stack.length) {
        throw new Error(`There are ${stack.length} unclosed groups: '${stack.map(x => String.fromCharCode(x)).join("','")}'`);
    }

    return text.length;
}
