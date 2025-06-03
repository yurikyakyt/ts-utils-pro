/**
 * Декоратор, задерживающий вызов функции до истечения времени задержки.
 * @param fn - Исходная функция.
 * @param delay - Задержка в миллисекундах.
 * @returns Обёрнутая функция с debounce.
 */
export function debounce<F extends (...args: unknown[]) => unknown>(
    fn: F,
    delay: number
): F {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return function (...args: Parameters<F>) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    } as F;
}
