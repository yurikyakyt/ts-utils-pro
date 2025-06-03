/**
 * Делает все свойства типа необязательными.
 * @template T - Тип, чьи свойства становятся необязательными.
 */
export type MyPartial<T> = {
    [K in keyof T]?: T[K];
};

/**
 * Делает все свойства типа только для чтения.
 * @template T - Тип, чьи свойства становятся только для чтения.
 */
export type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

/**
 * Создаёт новый тип с выбранными свойствами из исходного.
 * @template T - Исходный тип.
 * @template K - Ключи, которые нужно выбрать.
 */
export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Исключает указанные свойства из типа.
 * @template T - Исходный тип.
 * @template K - Ключи, которые нужно исключить.
 */
export type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
};

/**
 * Создаёт объект с ключами K и значением типа T.
 * @template K - Множество ключей.
 * @template T - Тип значений.
 */
export type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
};
