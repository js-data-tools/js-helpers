/* eslint-disable no-bitwise */

/**
 * An IPv4 address, represented either as string ("212.143.78.11") or as a 4-bytes integer (3566161419)
 */
export type Ipv4 = string | number;

/**
 * Converts an IP value to string format.
 * @since 1.0.0
 * @category convert
 * @param {string|number} ip 
 * @returns {string} A string represetnation of the specified IP address.
 * 
 * @example
 * 
 * ipv4AsString(3566161419)
 * // => "212.143.78.11"
 * 
 * ipv4AsString(-1407844352)
 * // => "172.22.0.0"
 * 
 * ipv4AsString("212.143.78.11")
 * // => "212.143.78.11"
 *
 * ipv4AsString("not-ipv4")
 * // => "not-ipv4" - this method does not validate input
 */
export function ipv4AsString(ip: number | string): string {
    if (typeof ip === "string") {
        return ip;
    }

    const tokens = [0, 0, 0, 0];

    let current = ip;
    for (let i = 3; i >= 0; --i) {
        tokens[i] = current & 0xff;
        current >>= 8;
    }

    return tokens.join(".");
}

/**
 * Converts an IP value to numeric format.
 * @since 1.0.0
 * @category convert
 * @param {string|number} ip 
 * @returns {number} A numeric represetnation of the specified IP address.
 * 
 * @example
 * 
 * ipv4AsNumber("212.143.78.11")
 * // => 3566161419
 * 
 * ipv4AsNumber(-1407844352)
 * // => -1407844352
 * 
 */
export function ipv4AsNumber(ip: number | string): number {
    if (typeof ip === "number") {
        return ip;
    }

    // Parse IPv4 address
    let result = 0;
    ip.split(".").forEach((token, i) => {
        result += parseInt(token, 10) << (8 * (3 - i));
    });
    return result;
}

/**
 * Checks if two IPv4 values are equal.
 * @since 1.0.0
 * @param {string|number|null|undefined} a The first IPv4 value to compare. Can also be null or undefined.
 * @param {string|number|null|undefined} b The second IPv4 value to compare. Can also be null or undefined.
 * @returns {boolean} true if a and b are equal, otherwise false.  This function assumes that null === undefined === ""
 * @example
 * 
 * areIpsEqual(3566161419, "212.143.78.11")
 * // => true
 * 
 * areIpsEqual("212.143.78.11", -1407844352)
 * // => false
 * 
 * areIpsEqual("212.143.78.11", "172.22.0.0")
 * // => false
 * 
 * areIpsEqual("212.143.78.11", undefined)
 * // => false
 * 
 */
export function areIpsEqual(a: Ipv4 | null | undefined, b: Ipv4 | null | undefined): boolean {
    if (!a) {
        return !b;
    }
    if (!b) {
        return false;
    }
    if (typeof a === typeof b) {
        return a === b;
    }
    return ipv4AsString(a) === ipv4AsString(b);
}
