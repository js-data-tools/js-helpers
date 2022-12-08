/* eslint-disable no-bitwise */

const bigint255 = BigInt(255);
const bigint8 = BigInt(8);
const macDelimiterPattern = /[-:]/g;

/**
 * Converts a MAC address to string, formatting it using the specified delimiter (dash / color / none).
 *
 * @since 0.1.2
 * @category convert
 * @param {bigint|string} mac - The MAC address to format.
 * @param {string} [format="-"] - The delimiter to put between MAC address components.
 * @returns {string} The MAC address, formatted using specified  delimiter.
 * @example
 *
 * macAddressAsString(BigInt(45459793942), ":");
 * // => "00:0a:95:9d:68:16"
 *
 * macAddressAsString(45459793942n, "-");
 * // => "00-0a-95-9d-68-16"
 *
 * macAddressAsString(45459793942n, "");
 * // => "000a959d6816"
 *
 * macAddressAsString("00:0a:95:9d:68:16", "-");
 * // => "00-0a-95-9d-68-16"
 *
 * macAddressAsString("000a959d6816", ":");
 * // => "00:0a:95:9d:68:16"
 */
export function macAddressAsString(mac: bigint | string, format?: "-" | ":" | ""): string {
    const delimiter = format === undefined ? "-" : format;

    if (typeof mac === "string") {
        if (mac.length !== 12 && mac.length !== 17) {
            throw new Error("Input of bad length.  MAC address string should be either 12 or 17 characters long");
        }

        // Enforce requested delimiters
        if (!delimiter) {
            if (mac.length === 12) {
                return mac;
            }

            // Remove delimiters
            return mac.replace(macDelimiterPattern, "");
        }
        if (mac.length === 12) {
            // Insert delimiters
            return (
                mac.substring(0, 2) +
                delimiter +
                mac.substring(2, 4) +
                delimiter +
                mac.substring(4, 6) +
                delimiter +
                mac.substring(6, 8) +
                delimiter +
                mac.substring(8, 10) +
                delimiter +
                mac.substring(10, 12)
            );
        }
        if (mac[2] !== delimiter) {
            // Replace delimiters
            return mac.replace(macDelimiterPattern, delimiter);
        }

        // Delimiters already match
        return mac;
    }

    if (typeof mac !== "bigint") {
        throw new Error("Input should be either string or bigint");
    }

    const tokens: string[] = new Array<string>(6);

    let current: bigint = mac;
    for (let i = 5; i >= 0; --i) {
        tokens[i] = (current & bigint255).toString(16).padStart(2, "0");
        current >>= bigint8;
    }

    return tokens.join(delimiter);
}

/**
 * Converts a MAC address to a number.
 *
 * @since 0.1.2
 * @category convert
 * @param {number | string | bigint} mac - The MAC address to convert.
 * @returns {bigint|number} The numeric representation of the given MAC address.  This function returns the input as-is if it is already a number.
 * @example
 *
 * macAddressAsNumber("00:0a:95:9d:68:16");
 * // => 45459793942n
 *
 * macAddressAsNumber("00-0a-95-9d-68-16");
 * // => 45459793942n
 *
 * macAddressAsNumber("000a959d6816");
 * // => 45459793942n
 *
 * macAddressAsNumber(45459793942);
 * // => 45459793942
 *
 */
export function macAddressAsNumber(mac: number | string | bigint): bigint | number {
    if (typeof mac === "number") {
        return mac;
    }
    if (typeof mac === "bigint") {
        return mac;
    }
    return BigInt("0x" + mac.replace(/[-:]/g, ""));
}
