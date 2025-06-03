/**
 * Глубокое клонирование объекта.
 * @param obj - Объект для клонирования.
 * @returns Глубокая копия объекта.
 */
declare function deepClone<T>(obj: T): T;

type Listener = (...args: unknown[]) => void;
/**
 * Создаёт типизированный объект событийного эмиттера.
 * @template T - Строковые ключи событий.
 * @returns Объект с методами on, emit, off для управления событиями.
 */
declare function createEventEmitter<T extends string>(): {
    on(event: T, listener: Listener): void;
    off(event: T, listener: Listener): void;
    emit(event: T, ...args: unknown[]): void;
};

/**
 * Кеширует результат вызова функции на основе аргументов.
 * @param fn - Исходная функция.
 * @returns Мемоизированная функция.
 */
declare function memoize<F extends (...args: unknown[]) => unknown>(fn: F): F;

/**
 * Глубокое сравнение двух значений.
 * @param a - Первое значение.
 * @param b - Второе значение.
 * @returns true, если значения равны, иначе false.
 */
declare function isEqual(a: unknown, b: unknown): boolean;

/**
 * Возвращает функцию, которую можно вызвать только один раз.
 * @param fn - Исходная функция.
 * @returns Функция-обёртка, вызываемая только один раз.
 */
declare function once<F extends (...args: unknown[]) => unknown>(fn: F): F;

/**
 * Декоратор, задерживающий вызов функции до истечения времени задержки.
 * @param fn - Исходная функция.
 * @param delay - Задержка в миллисекундах.
 * @returns Обёрнутая функция с debounce.
 */
declare function debounce<F extends (...args: unknown[]) => unknown>(fn: F, delay: number): F;

/**
 * Группирует элементы массива по значению указанного ключа.
 * @param array - Массив объектов.
 * @param key - Ключ, по которому будет производиться группировка.
 * @returns Объект, сгруппированный по ключу.
 */
declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;

/**
 * Глубокое объединение двух объектов.
 * @param a - Первый объект.
 * @param b - Второй объект.
 * @returns Новый объект, содержащий объединённые значения.
 */
declare function mergeDeep<A, B>(a: A, b: B): A & B;

/**
 * Делает все свойства типа необязательными.
 * @template T - Тип, чьи свойства становятся необязательными.
 */
type MyPartial<T> = {
    [K in keyof T]?: T[K];
};
/**
 * Делает все свойства типа только для чтения.
 * @template T - Тип, чьи свойства становятся только для чтения.
 */
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};
/**
 * Создаёт новый тип с выбранными свойствами из исходного.
 * @template T - Исходный тип.
 * @template K - Ключи, которые нужно выбрать.
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
/**
 * Исключает указанные свойства из типа.
 * @template T - Исходный тип.
 * @template K - Ключи, которые нужно исключить.
 */
type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};
/**
 * Создаёт объект с ключами K и значением типа T.
 * @template K - Множество ключей.
 * @template T - Тип значений.
 */
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};

export { MyOmit, MyPartial, MyPick, MyReadonly, MyRecord, createEventEmitter, debounce, deepClone, groupBy, isEqual, memoize, mergeDeep, once };
