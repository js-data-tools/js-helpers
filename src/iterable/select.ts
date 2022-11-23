/**
 * Filter elements of the iterable collection, using the given predicate function.
 * 
 * @description This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
 * When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
 * iterator, skipping values that do not pass the given filter.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from - The enumerable collection to filter elements of.
 * @param predicate - The predicate function, receiving a single collection's element as a parameter and returning true to keep that element (or false to skip it)
 * @returns A new iterable object, which, when iterated, will return elements from the inner collection, filtered with the given predicate (e.g. only 
 * those that the predicate returns true for them)
 */
export function* filter<T>(from: Iterable<T> | undefined | null, predicate?: ((item: T) => boolean) | null): Iterable<T> {
    if (!from) {
        return;
    }
    if (!predicate) {
        yield* from;
        return;
    }

    for (const item of from) {
        if (predicate(item)) {
            yield item;
        }
    }
}

/**
 * Take (up to) first N elements of the given iterable collection.
 * 
 * @description This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
 * When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
 * iterator up to <N> times and then stops the enumeration as if the original iterator reached the end of the sequence.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from - The enumerable object to take elements of.
 * @param {number} count - The number of elements to take.  A negative count stands for "take all elements".
 * @retuns A new iterable object, which, when iterated, will return the first <count> elements from the source collection (or less 
 * is the source collection is shorter than <count>).
 */
export function* take<T>(from: Iterable<T> | undefined | null, count: number): Iterable<T> {
    if (!from) {
        return;
    }

    let remained = count || 0;
    for (const item of from) {
        if (remained > 0) {
            yield item;
            --remained;
        } else {
            return;
        }
    }
}

/**
 * Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).
 * 
 * @description This function does not iterate the source collection by itself, it just creates a wrapper iterable object.
 * When the caller enumerates entries of that wrapper object, the implementation delegates the call to the internal (source)
 * iterator.  It checks every element using the given predicate and stops the enumeration when predicate returns false.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to take elements of.
 * @param condition The predicate, takign a collection's element as a parameter and returning false to stop enumeration.
 * @returns A new enuemrable objects, which will return first elements of the source collection, which all satisfy the given condition.
 */
export function* takeWhile<T>(from: Iterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): Iterable<T> {
    if (!from) {
        return;
    }

    if (!condition) {
        yield* from;
        return;
    }

    for (const item of from) {
        if (condition(item)) {
            yield item;
        } else {
            return;
        }
    }
}

/**
 * Enumerate elements of the given iterable collection, until some element satisfies the given condition (predicate).
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to take elements of.
 * @param condition The predicate, takign a collection's element as a parameter and returning false to stop enumeration.
 */
export function takeUntil<T>(from: Iterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): Iterable<T> {
    return takeWhile(from, condition ? (x) => !condition(x) : condition);
}

/**
 * 
 * @since 1.0.0
 * @category iterable
 * Skip (up to) first N elements of the given iterable collection.
 * @param from The enumerable collection to skip elements of.
 * @param count The number of elements to skip
 */
export function* skip<T>(from: Iterable<T> | undefined | null, count: number): Iterable<T> {
    if (!from) {
        return;
    }

    let skip = count;
    for (const item of from) {
        if (skip > 0) {
            --skip;
            continue;
        }
        yield item;
    }
}

/**
 * Skip first elements of the iterable collection, while they match a given condition.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to skip elements of.
 * @param condition The predicate function, getting a collection's element and returning true if element should be skipped (false to stop skipping and return the rest)
 */
export function* skipWhile<T>(from: Iterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): Iterable<T> {
    if (!from) {
        return;
    }

    if (!condition) {
        yield* from;
        return;
    }

    let continueSkipping = true;
    for (const item of from) {
        if (continueSkipping) {
            if (condition(item)) {
                continue;
            }
            continueSkipping = false;
        }
        yield item;
    }
}

/**
 * Skip first elements of the iterable collection until one of them matches a given condition.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to skip elements of.
 * @param condition The predicate function, getting a collection's element and returning false if element should be skipped (true to stop skipping and return the rest)
 */
export function skipUntil<T>(from: Iterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): Iterable<T> {
    return skipWhile(from, condition ? (x) => !condition(x) : condition);
}

/**
 * Filter elements of the given iterable collection, using given predicate function.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to filter elements of.
 * @param predicate The predicate function, receiving a single collection's element as a parameter and returning true to keep that element (or false to skip it)
 */
 export async function* filterAsync<T>(from: AsyncIterable<T> | undefined | null, predicate?: ((item: T) => boolean) | null): AsyncIterable<T> {
    if (!from) {
        return;
    }
    if (!predicate) {
        yield* from;
        return;
    }

    for await (const item of from) {
        if (predicate(item)) {
            yield item;
        }
    }
}

/**
 * Take (up to) first N elements of the given iterable collection.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to take elements of.
 * @param count The number of elements to take
 */
export async function* takeAsync<T>(from: AsyncIterable<T> | undefined | null, count: number): AsyncIterable<T> {
    if (!from) {
        return;
    }

    let remained = count || 0;
    for await (const item of from) {
        if (remained > 0) {
            yield item;
            --remained;
        } else {
            return;
        }
    }
}

/**
 * Enumerate elements of the given iterable collection, while they satisfy given condition (predicate).
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to take elements of.
 * @param condition The predicate, takign a collection's element as a parameter and returning false to stop enumeration.
 */
export async function* takeWhileAsync<T>(from: AsyncIterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): AsyncIterable<T> {
    if (!from) {
        return;
    }

    if (!condition) {
        yield* from;
        return;
    }

    for await (const item of from) {
        if (condition(item)) {
            yield item;
        } else {
            return;
        }
    }
}

/**
 * Enumerate elements of the given iterable collection, until some element satisfies the given condition (predicate).
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to take elements of.
 * @param condition The predicate, takign a collection's element as a parameter and returning false to stop enumeration.
 */
export function takeUntilAsync<T>(from: AsyncIterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): AsyncIterable<T> {
    return takeWhileAsync(from, condition ? (x) => !condition(x) : condition);
}

/**
 * Skip (up to) first N elements of the given iterable collection.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to skip elements of.
 * @param count The number of elements to skip
 */
export async function* skipAsync<T>(from: AsyncIterable<T> | undefined | null, count: number): AsyncIterable<T> {
    if (!from) {
        return;
    }

    let skip = count;
    for await (const item of from) {
        if (skip > 0) {
            --skip;
            continue;
        }
        yield item;
    }
}

/**
 * Skip first elements of the iterable collection, while they match a given condition.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to skip elements of.
 * @param condition The predicate function, getting a collection's element and returning true if element should be skipped (false to stop skipping and return the rest)
 */
export async function* skipWhileAsync<T>(from: AsyncIterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): AsyncIterable<T> {
    if (!from) {
        return;
    }

    if (!condition) {
        yield* from;
        return;
    }

    let continueSkipping = true;
    for await (const item of from) {
        if (continueSkipping) {
            if (condition(item)) {
                continue;
            }
            continueSkipping = false;
        }
        yield item;
    }
}

/**
 * Skip first elements of the iterable collection until one of them matches a given condition.
 * 
 * @since 1.0.0
 * @category iterable
 * @param from The enumerable collection to skip elements of.
 * @param condition The predicate function, getting a collection's element and returning false if element should be skipped (true to stop skipping and return the rest)
 */
export function skipUntilAsync<T>(from: AsyncIterable<T> | undefined | null, condition: ((item: T) => boolean) | null | undefined): AsyncIterable<T> {
    return skipWhileAsync(from, condition ? (x) => !condition(x) : condition);
}
