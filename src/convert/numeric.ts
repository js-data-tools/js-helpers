const FACTORS = [1, 10, 100, 1000];

/**
 * Rounds the given number to have at most <n> decimal digits.
 * 
 * @since 1.0.0
 * @category convert
 * @param {number} value - The numeric value to round
 * @param {number} [maxDecimalDigits=2] - The maximal number of decimal digits to keep.  Negative or undefined value means "do not round".
 * @returns {number} The given number, rounded to the requested number of decimal digits.
 * @example
 * 
 * console.log(roundNumber(3.14159265));    // 3.14
 * console.log(roundNumber(3.14159265, 4)); // 3.1416
 * console.log(roundNumber(-2.246));        // -2.25
 * 
 */
export function roundNumber(value: number, maxDecimalDigits = 2) {
    if (maxDecimalDigits === undefined || maxDecimalDigits < 0) {
        return value;
    }
    if (!maxDecimalDigits) {
        return Math.round(value);
    }

    const intPart = Math.trunc(value);
    const fraction = value - intPart;
    if (fraction === 0) {
        return intPart;
    }

    const factor = maxDecimalDigits < FACTORS.length ? FACTORS[maxDecimalDigits] : Math.pow(10, maxDecimalDigits);
    return intPart + Math.round(fraction * factor) / factor;
}

/**
 * Converts number to a [compact, power] tuple.  In other words, value = compact * base ^ power.
 * This format allows formatting given number as a compact string (1234567890 => [1.23, 3] => 1.23G)
 * 
 * @since 1.0.0
 * @category convert
 * @param {number} value The numeric value to convert.
 * @param {number} [maxPower=4] The maximal allowed power of the base (used to make sure we have a unit name for the power)
 * @param {number} [base=1000] The base for the power.
 * @returns {[number, number]} The array, continung two numbers: the compact and power.
 */
export function compactNumber(value: number, maxPower = 4, base = 1000): [compact: number, power: number] {
    let current = Math.abs(value);
    let power = 0;

    // Compact the integer part
    while (power < maxPower && current >= base) {
        current /= base;
        power++;
    }

    // Now, compact the fractions
    current = roundNumber(value < 0 ? -current : current, current < 100 ? 2 : current < base ? 1 : 0);
    return [current, power];
}
