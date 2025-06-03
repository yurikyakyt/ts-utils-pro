/**
 * Возвращает функцию, которую можно вызвать только один раз.
 * @param fn - Исходная функция.
 * @returns Функция-обёртка, вызываемая только один раз.
 */
export function once<F extends (...args: unknown[]) => unknown>(fn: F): F {
    let called = false;
    let result: ReturnType<F>;

    return function (...args: Parameters<F>): ReturnType<F> {
        if (!called) {
            called = true;
            result = fn(...args) as ReturnType<F>;
        }
        return result;
    } as F;
}
