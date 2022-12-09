/**
 * Configuration, specifying how to re-order properties of a plain JavaScript object
 */
export interface PropertiesOrderOptions {
    /**
     * Names of properties to put first in the resulting object.  Order of values in the "first" list is important,
     * it will be preserved in the resulting object.  The "first" list may contain names that do not exist
     * in the real object, they will simply be ignored.
     *
     * If some name appears in both "first" and "last" lists, the "first" has higher priority than the "last".
     */
    first?: string[];

    /**
     * NAmes of properties to put last in the resulting object.  Order of values in the "last" list is important,
     * it will be preserved in the resulting object.  The "last" list may contain names that do not exist
     * in the real object, they will simply be ignored.
     *
     * If some name appears in both "first" and "last" lists, the "first" has higher priority than the "last".
     */
    last?: string[];

    /**
     * A boolean flag, specifying whether to sort properties by their name.  Properties that appear in the "first" or "last"
     * lists will not participate in the sort.
     */
    sort?: boolean;

    /**
     * A boolean flag, specifying whether to sort property names in the descending order (default is to sort them ascending).
     */
    sortDescending?: boolean;
}

/**
 * Re-orders values in a string array, according to user preferences, putting specific strings at the beginning,
 * others at the end, and optionally sorting the rest of values (in the middle).
 * @param {string[]} names = The list of names (strings) to re-order.
 * @param {PropertiesOrderOptions | undefined} options - Configuration, specifying which properties
 * should come first, which should come last and how to sort the rest of properties (if at all).
 * @returns A new array, containing values from the names array, ordered according to options.
 * @description This function is intended to help with re-ordering properties of a plain JavaScript object (actually JSON).
 * Calling this function in loop should work fast enough on a decent amount of records, but it is not optimized for bulk processing.
 * @category transform
 * @since 0.3.0
 *
 * @example
 *
 * orderNames(
 *     ["description", "name", "version", "dependencies", "author", "devDependencies"],
 *     { first: ["name", "version", "description", "type"], sort: true }
 * );
 * // => ["name", "version", "description", "author", "dependencies", "devDependencies"]
 */
export function orderNames(names: string[], options: PropertiesOrderOptions): string[] {
    const remained = new Set(names);
    const head: string[] = [];
    const tail: string[] = [];

    if (options.first?.length) {
        head.push(...options.first.filter((name) => remained.delete(name)));
    }
    if (options.last?.length) {
        tail.push(...options.last.filter((name) => remained.delete(name)));
    }
    if (options.sort) {
        const body = [...remained.values()].sort();
        if (options.sortDescending) {
            body.reverse();
        }
        return [...head, ...body, ...tail];
    }

    return [...head, ...remained.values(), ...tail];
}

/**
 * Re-orders properties of the given JS plain object (containing only string keys) - useful for serializing to JSON.
 *
 * @param source - The source object to re-order properties of.
 * @param options - The configuration, specifying which properties should come first, which should come last and whether to sort the rest of properties.
 * @param inplace - A boolean flag, specifying whether changes should be performed on the source object itself (expensive) or on a cloned copy.
 * @returns An object with re-ordered properties.  If inplace is set to true, function returns reference to source.
 * If inplace is set to false, then the return value is a new object with properties, copied from source.  If inplace
 * is undefined, then the return value can be either source or its clone (depending on options).
 * @category transform
 * @since 0.3.0
 *
 * @example
 *
 * const normalized = reorderProperties(
 *     { version: "1.0.0", name: "js-helpers", author: "Sergey", license: "MIT", main: "index.js", files: ["dist"] },
 *     { first: ["name", "version"], last: ["license"], sort: true }
 * );
 *
 * console.log(JSON.stringify(normalized));
 * // => {"name":"js-helpers","version":"1.0.0","author":"Sergey","files":["dist"],"main":"index.js","license":"MIT"}
 *
 */
export function reorderProperties<T = unknown>(
    source: Record<string, T>,
    options: PropertiesOrderOptions,
    inplace?: boolean
): Record<string, T> {
    if (!options.first?.length && !options.last?.length && !options.sort) {
        return inplace !== false ? source : Object.assign({}, source);
    }

    const keys = Object.keys(source);
    const ordered = orderNames(keys, options);

    const target: Record<string, T> = {};
    for (const name of ordered) {
        target[name] = source[name];
        if (inplace) {
            delete source[name];
        }
    }

    if (inplace) {
        return Object.assign(source, target);
    }
    return target;
}
