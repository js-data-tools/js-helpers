/**
 * Create a transforming proxy for asynchronous stream of values.
 *
 * @description This function does not iterate the source collection by itself, it just creates a wrapper iterator.
 * When caller asks for the next entry, the wrapper iterator delegates the call to the internal (source) iterator,
 * then applies the given transformation function on that entry and returns the transformation result to caller.
 *
 * @since 0.1.2
 * @category iterable
 * @param {Iterable<T>} source - The source asynchronous iterable stream of values (generator or some other source).
 * @param transform - The callback function that will transform entries of the source collection to the desired format.
 * @returns A new iterable stream of transformed values (asynchronous).
 */
export async function* mapAsync<T, U>(source: AsyncIterable<T>, transform: (item: T) => U): AsyncGenerator<U> {
    for await (const item of source) {
        yield transform(item);
    }
}

/**
 * Create a transforming proxy for synchronous stream of values (iterable collection).
 *
 * @description This function by itself does not iterate the source collection, it just creates a wrapper iterator.
 * When caller asks for the next entry, the wrapper iterator delegates the call to the internal (source) iterator,
 * then applies the given transformation function on that entry and returns the transformation result to caller.
 *
 * @since 0.1.2
 * @category iterable
 * @param {Iterable<T>} source - The source iterable collection
 * @param transform - The callback function that will transform entries of the source collection to the desired format.
 * @returns A new iterable stream of transformed values.
 */
export function* map<T, U>(source: Iterable<T>, transform: (item: T) => U): Generator<U> {
    for (const item of source) {
        yield transform(item);
    }
}
