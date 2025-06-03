/**
 * Группирует элементы массива по значению указанного ключа.
 * @param array - Массив объектов.
 * @param key - Ключ, по которому будет производиться группировка.
 * @returns Объект, сгруппированный по ключу.
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((acc, item) => {
        const k = item[key];
        const groupKey = String(k);
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {} as Record<string, T[]>);
}
