export type Predicate<T> = (value: T) => boolean;

// ---------------------------------------------------------------------------------------
// Trivial predicates
// ---------------------------------------------------------------------------------------

/**
 * A predicate, always returning true, regardless of the input value.
 * 
 * @since 1.0.0
 * @category predicates
 * @param {*} input - The input value (ignored)
 * @returns true
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function alwaysTrue<T>(input: T): boolean {
    return true;
}

/**
 * Checks if given value is null or undefined
 * 
 * @since 1.0.0
 * @category predicates
 * @param input - A value to inspect
 * @returns {boolean} true if the input value is null or undefined, otherwise false.
 */
export function isNullOrUndefined<T>(input: T | null | undefined): boolean {
    return input === undefined || input === null;
}

/**
 * Checks if given value is not null and not undefined
 * 
 * @since 1.0.0
 * @category predicates
 * @param input - A value to inspect
 * @returns {boolean} false if the input value is null or undefined, otherwise true.
 */
export function notNullOrUndefined<T>(input: T | null | undefined): input is T {
    return input !== undefined && input !== null;
}

/**
 * Checks if given array is null / undefined or contains no elements
 * 
 * @since 1.0.0
 * @category predicates
 * @param {Array} input - An array to inspect
 * @returns {boolean} true if given set is null, undefined or contains no elements.
 */
export function isEmptyArray<T>(input: Array<T> | null | undefined): boolean {
    return !input || (Array.isArray(input) && !input.length);
}

/**
 * Checks if given array is not null / undefined and contains at least one element.
 * 
 * @since 1.0.0
 * @category predicates
 * @param {Array} input - An array to inspect
 * @returns {boolean} true if given array exists (not null / undefined) and contains at least one element.
 */
export function isNonEmptyArray<T>(input: Array<T> | null | undefined): input is Array<T> {
    return Array.isArray(input) && input.length > 0;
}

/**
 * Checks if given set is null / undefined or contains no elements
 * 
 * @since 1.0.0
 * @category predicates
 * @param {Set} input - A set to inspect
 * @returns {boolean} true if given set is null, undefined or contains no elements.
 */
export function isEmptySet<T>(input: Set<T> | null | undefined): boolean {
    return !input || !input.size;
}

/**
 * Checks if given set is not null / undefined and contains at least one element.
 * 
 * @since 1.0.0
 * @category predicates
 * @param {Set} input - A set to inspect
 * @returns {boolean} true if given set exists (not null / undefined) and contains at least one element.
 */
export function isNonEmptySet<T>(input: Set<T> | null | undefined): input is Set<T> {
    return !!input && input.size > 0;
}

/**
 * Checks if given map is null / undefined or contains no elements
 * 
 * @since 1.0.0
 * @category predicates
 * @param {Map} input - A map to inspect
 * @returns {boolean} true if given map is null, undefined or contains no elements.
 */
export function isEmptyMap<K, V>(input: Map<K, V> | null | undefined): boolean {
    return !input || !input.size;
}

/**
 * Checks if given map is not null / undefined and contains at least one element.
 * 
 * @since 1.0.0
 * @category predicates
 * @param {Map} input - A map to inspect
 * @returns {boolean} true if given map exists (not null / undefined) and contains at least one element.
 */
export function isNonEmptyMap<K, V>(input: Map<K, V> | null | undefined): input is Map<K, V> {
    return !!input && input.size > 0;
}

/**
 * Checks if given object is null / undefined or contains no public properties.
 * 
 * @since 1.0.0
 * @category predicates
 * @param input - An object to inspect.
 * @returns {boolean} true if given object is null, undefined or contains no properties.
 */
export function isEmptyObject<T extends object>(input: T | null | undefined): boolean {
    return !input || !Object.keys(input).length;
}

/**
 * Checks if given object is not null / undefined and contains at least one public property.
 * 
 * @since 1.0.0
 * @category predicates
 * @param input - An object to inspect.
 * @returns {boolean} true if given object is not null / undefined and contains at least one property.
 */
export function isNonEmptyObject<T extends object>(input: T | null | undefined): input is T {
    return !!input && Object.keys(input).length > 0;
}

// ---------------------------------------------------------------------------------------
// Compose filters
// ---------------------------------------------------------------------------------------
/**
 * Composes a predicate, which will check if given value satisfies all inner conditions.
 * 
 * @since 1.0.0
 * @category predicates
 * @param predicates - A list of functions, checking the "inner" conditions.  The "outer" predicate will return true if and only if all inner conditions are true.
 * @returns A new {@link Predicate}, which evaluate given conditions on an input value and return true if all conditions are met.
 */
export function and<T>(...predicates: Array<Predicate<T> | null | undefined>): Predicate<T> {
    const conditions = predicates?.filter(notNullOrUndefined);
    if (!conditions || conditions.length === 0) {
        return alwaysTrue;
    }
    if (conditions.length === 1) {
        return conditions[0];
    }
    return (input) => conditions.every((test) => test(input));
}

/**
 * Composes a predicate, which will check if given value satisfies at least one of inner conditions.
 * 
 * @since 1.0.0
 * @category predicates
 * @param predicates - A list of functions, checking the "inner" conditions.  The "outer" predicate will return true if at least one of inner conditions is met.
 * @returns A new {@link Predicate}, which evaluate given conditions on an input value and return true if at least one of inner conditions is met.
 */
 export function or<T>(...predicates: Array<Predicate<T> | null | undefined>): Predicate<T> {
    const conditions = predicates?.filter(notNullOrUndefined);
    if (!conditions || conditions.length === 0) {
        return alwaysTrue;
    }
    if (conditions.length === 1) {
        return conditions[0];
    }
    return (input) => conditions.some((test) => test(input));
}

/**
 * Composes a predicate, which will negate the given one.
 * 
 * @since 1.0.0
 * @category predicates
 * @param predicate - The "inner" predicate to negate.
 * @returns A new {@link Predicate}, which evaluate the given condition and return the negated value (e.g. false if inner condition is true and vice versa).
 */
export function not<T>(predicate: Predicate<T>): Predicate<T> {
    return (input) => !predicate(input);
}
