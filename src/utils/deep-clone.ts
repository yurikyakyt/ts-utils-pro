/**
 * Глубокое клонирование объекта.
 * @param obj - Объект для клонирования.
 * @returns Глубокая копия объекта.
 */
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime()) as unknown as T;
    }

    if (obj instanceof Map) {
        return new Map(Array.from(obj.entries()).map(
            ([key, val]) => [deepClone(key), deepClone(val)]
        )) as unknown as T;
    }

    if (obj instanceof Set) {
        return new Set(Array.from(obj.values()).map(
            val => deepClone(val)
        )) as unknown as T;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)) as unknown as T;
    }

    const clonedObj = {} as Record<string, unknown>;
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj as T;
}