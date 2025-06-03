/**
 * Глубокое объединение двух объектов.
 * @param a - Первый объект.
 * @param b - Второй объект.
 * @returns Новый объект, содержащий объединённые значения.
 */
export function mergeDeep<A, B>(a: A, b: B): A & B {
    const result = { ...a } as any;

    for (const key in b) {
        if (
            typeof b[key] === 'object' &&
            b[key] !== null &&
            !Array.isArray(b[key]) &&
            typeof result[key] === 'object' &&
            result[key] !== null
        ) {
            result[key] = mergeDeep(result[key], b[key]);
        } else {
            result[key] = b[key];
        }
    }

    return result;
}
