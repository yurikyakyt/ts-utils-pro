type Listener = (...args: unknown[]) => void;

/**
 * Создаёт типизированный объект событийного эмиттера.
 * @template T - Строковые ключи событий.
 * @returns Объект с методами on, emit, off для управления событиями.
 */
export function createEventEmitter<T extends string>() {
    const listeners: Partial<Record<T, Listener[]>> = {};

    return {
        on(event: T, listener: Listener) {
            (listeners[event] ??= []).push(listener);
        },
        off(event: T, listener: Listener) {
            const arr = listeners[event];
            if (arr) {
                listeners[event] = arr.filter(l => l !== listener);
            }
        },
        emit(event: T, ...args: unknown[]) {
            listeners[event]?.forEach(listener => listener(...args));
        },
    };
}
