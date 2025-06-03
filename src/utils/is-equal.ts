/**
 * Глубокое сравнение двух значений.
 * @param a - Первое значение.
 * @param b - Второе значение.
 * @returns true, если значения равны, иначе false.
 */
export function isEqual(a: unknown, b: unknown): boolean {
    if (Object.is(a, b)) return true;

    if (
        typeof a !== 'object' || a === null ||
        typeof b !== 'object' || b === null
    ) return false;

    const aKeys = Object.keys(a as object);
    const bKeys = Object.keys(b as object);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(key =>
        isEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])
    );
}
