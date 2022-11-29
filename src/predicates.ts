export type Predicate<T> = (value: T) => boolean;

// ---------------------------------------------------------------------------------------
// Trivial predicates
// ---------------------------------------------------------------------------------------

/**
 * A predicate function, always returning true, regardless of the input value.
 *
 * @since 0.1.2
 * @category predicates
 * @param {*} input - The input value (ignored)
 * @returns true
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function alwaysTrue<T>(input: T): boolean {
    return true;
}

/**
 * Check if the given value is null or undefined.
 *
 * @since 0.1.2
 * @category predicates
 * @param input - The value to inspect.
 * @returns {boolean} true if the input parameter is null or undefined, otherwise false.
 */
export function isNullOrUndefined<T>(input: T | null | undefined): boolean {
    return input === undefined || input === null;
}

/**
 * Check if the given value is not null and not undefined.  This function can also be used as a type predicate.
 *
 * @since 0.1.2
 * @category predicates
 * @param input - The value to inspect.
 * @returns {boolean} false if the input value is null or undefined, otherwise true.
 */
export function notNullOrUndefined<T>(input: T | null | undefined): input is T {
    return input !== undefined && input !== null;
}

/**
 * Check if the given array is null / undefined or contains no elements.
 *
 * @since 0.1.2
 * @category predicates
 * @param {Array|null|undefined} input - The array object to inspect.
 * @returns {boolean} true if the given array is null, undefined or contains no elements.
 */
export function isEmptyArray<T>(input: Array<T> | null | undefined): boolean {
    return !input || (Array.isArray(input) && !input.length);
}

/**
 * Check if the given array is not null / undefined and contains at least one element. This function can also be used as a type predicate.
 *
 * @since 0.1.2
 * @category predicates
 * @param {Array|null|undefined} input - The array object to inspect.
 * @returns {boolean} true if the given array exists (not null / undefined) and contains at least one element.
 */
export function isNonEmptyArray<T>(input: Array<T> | null | undefined): input is Array<T> {
    return Array.isArray(input) && input.length > 0;
}

/**
 * Check if the given set is null / undefined or contains no elements.
 *
 * @since 0.1.2
 * @category predicates
 * @param {Set|null|undefined} input - The set object to inspect.
 * @returns {boolean} true if given set is null, undefined or contains no elements.
 */
export function isEmptySet<T>(input: Set<T> | null | undefined): boolean {
    return !input || !input.size;
}

/**
 * Check if the given set is not null / undefined and contains at least one element. This function can also be used as a type predicate.
 *
 * @since 0.1.2
 * @category predicates
 * @param {Set|null|undefined} input - The set object to inspect.
 * @returns {boolean} true if the given set is not null / undefined and contains at least one element.
 */
export function isNonEmptySet<T>(input: Set<T> | null | undefined): input is Set<T> {
    return !!input && input.size > 0;
}

/**
 * Check if the given map is null / undefined or contains no elements.
 *
 * @since 0.1.2
 * @category predicates
 * @param {Map|null|undefined} input - The map object to inspect.
 * @returns {boolean} true if the given map object is null, undefined or contains no elements.
 */
export function isEmptyMap<K, V>(input: Map<K, V> | null | undefined): boolean {
    return !input || !input.size;
}

/**
 * Check if the given map is not null / undefined and contains at least one element. This function can also be used as a type predicate.
 *
 * @since 0.1.2
 * @category predicates
 * @param {Map|null|undefined} input - The map object to inspect.
 * @returns {boolean} true if the given map is not null / undefined and contains at least one element.
 */
export function isNonEmptyMap<K, V>(input: Map<K, V> | null | undefined): input is Map<K, V> {
    return !!input && input.size > 0;
}

/**
 * Check if the given object is null / undefined or contains no public properties.
 *
 * @since 0.1.2
 * @category predicates
 * @param input - The object to inspect.
 * @returns {boolean} true if the given object is null, undefined or contains no public properties.
 */
export function isEmptyObject<T extends object>(input: T | null | undefined): boolean {
    return !input || !Object.keys(input).length;
}

/**
 * Check if the given object is not null / undefined and contains at least one public property. This function can also be used as a type predicate.
 *
 * @since 0.1.2
 * @category predicates
 * @param input - The object to inspect.
 * @returns {boolean} true if the given object is not null / undefined and contains at least one property.
 */
export function isNonEmptyObject<T extends object>(input: T | null | undefined): input is T {
    return !!input && Object.keys(input).length > 0;
}

// ---------------------------------------------------------------------------------------
// Compose filters (predicates)
// ---------------------------------------------------------------------------------------

/**
 * Creates a new predicate function, checking if an input value satisfies all given conditions (a logical AND between other predicates).
 *
 * @since 0.1.2
 * @category predicates
 * @param predicates - The list of condition functions to combine with a logical AND.
 * @returns A new {@link Predicate}, which returns true if all inner conditions are met for the given input value.
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
 * Creates a new predicate function, checking if an input value satisfies any of the given conditions (a logical OR between other predicates).
 *
 * @since 0.1.2
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
 * Creates a new predicate function, which will negate the given one.
 *
 * @since 0.1.2
 * @category predicates
 * @param predicate - The "inner" predicate to negate.
 * @returns A new {@link Predicate}, which evaluates the given condition and returns the negated value (e.g. false if the inner condition is true and vice versa).
 */
export function not<T>(predicate: Predicate<T>): Predicate<T> {
    return (input) => !predicate(input);
}
