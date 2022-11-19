/**
 * Reads all values from the asynchronous stream (iterable) and stores them in the array.
 * 
 * @since 1.0.0
 * @category iterable
 * @param source - An async stream of values to iterate.
 * @param {Array} [target] - Reference to the array to append values to.  A new arrray will be created if this parameter is null or omitted.
 * @returns {Promise<Array<T>>} A promise for the resulting array.
 */
export async function toArrayAsync<T>(source: AsyncIterable<T>, target?: Array<T>): Promise<Array<T>> {
    if (!target) {
        // eslint-disable-next-line no-param-reassign
        target = [];
    }
    for await (const item of source) {
        target.push(item);
    }
    return target;
}
