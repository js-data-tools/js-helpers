/* eslint-disable @typescript-eslint/no-explicit-any */
import { isDefaultValue, isEmptyValue } from "../predicates";

/**
 * A reviver function for the JSON.stringify, which will remove properties with empty values:
 * undefined, nulls, empty strings, empty arrays, empty object literals.
 * @param key - The name of the property being inspected (ignored)
 * @param value - The value of the property to inspect and replace with
 * @returns undefined if the value is empty, otherwise the value itself.
 * @category json
 * @since 0.3.0
 * @example
 * 
 * JSON.stringify({ 
 *      major: 1,
 *      minor: 0,           // Not empty
 *      patch: undefined,   // Empty
 *      revision: "",       // Empty
 *      final: false,       // Not empty
 *      author: "Sergey",
 *      scope: null,        // Empty
 *      reviewers: [],      // Empty
 *      coverage: {}        // Empty
 *  }, ignoreEmpty);
 * 
 * // {"major":1,"minor":0,"final":false,"author":"Sergey"}
 * 
 */
export function ignoreEmpty(key: string, value: any): any {
    return isEmptyValue(value) ? undefined : value;
}

/**
 * A reviver function for the JSON.stringify, which will remove properties with empty values:
 * undefined, nulls, empty strings, empty arrays, empty object literals.
 * @param key - The name of the property being inspected (ignored)
 * @param value - The value of the property to inspect and replace with
 * @returns undefined if the value is empty, otherwise the value itself.
 * @category json
 * @since 0.3.0
 * @example
 * 
 * JSON.stringify({ 
 *      major: 1,
 *      minor: 0,           // Not empty
 *      patch: undefined,   // Empty
 *      revision: "",       // Empty
 *      final: false,       // Not empty
 *      author: "Sergey",
 *      scope: null,        // Empty
 *      reviewers: [],      // Empty
 *      coverage: {}        // Empty
 *  }, ignoreEmpty);
 * 
 * // {"major":1,"minor":0,"final":false,"author":"Sergey"}
 * 
 */
export function ignoreDefaults(key: string, value: any): any {
    return isDefaultValue(value) ? undefined : value;
}
