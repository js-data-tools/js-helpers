import { compactNumber } from "./convert/numeric";

export const SI_SIZE_UNITS =  ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];         // Power of 1000
export const IEC_SIZE_UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']; // Power of 1024
export const NUMERIC_UNITS =  ['', 'K', 'M', 'G', 'T', 'P'];         // Power of 1000

/**
 * Formats a given size (in bytes) as a compact string with units suffix (12345678790 => 1.23 GB).
 * 
 * @since 1.0.0
 * @category format
 * @param {number} sizeInBytes - The size (in bytes) to format.
 * @param {number} [base=1000] - The base to use when compacting size.  Can be either 1000 (SI) or 1024 (IEC).
 * @param {string[]} [unitNames] - An optional list of unit names to use. If this parameter is omitted, this function will 
 * automatically use the {@link SI_SIZE_UNITS} (if the base is 1000) or the {@link IEC_SIZE_UNITS}  (if the base is 1024).
 * @returns {string} A string with a compact version of size (1.27GB)
 * 
 * @example
 * 
 * console.log(formatSize(1023456789));       // => 1.02 GB
 * console.log(formatSize(1023456789, 1024)); // => 976 MiB
 * 
 */
export function formatSize(sizeInBytes: number, base: 1000 | 1024 = 1000, unitNames?: string[]): string {
    const units = unitNames || (base === 1024 ? IEC_SIZE_UNITS : SI_SIZE_UNITS);
    const [value, i] = compactNumber(sizeInBytes, units.length, base || 1000);
    return value + " " + units[i];
}

/**
 * Formats a numeric value, using a compact form (aka "1.2M"), which usually takes not more than 6 symbols.
 * 
 * @since 1.0.0
 * @category format
 * @param {number} value - The numerical value to format in a compact form.
 * @returns {string} A compact form of the given number (usually up to 5 characters).
 * 
 * @example
 * 
 * console.log(formatCompact(123)); // => 123
 * console.log(formatCompact(1200345)); // => 1.2M
 * 
 */
export function formatCompact(value: number): string {
    const [compact, i] = compactNumber(value, NUMERIC_UNITS.length);
    return compact + NUMERIC_UNITS[i];
}

