# Библиотека утилит TypeScript

Набор типобезопасных функций-утилит для повседневной разработки на TypeScript.

## Установка

```bash
npm install ts-utils-pro
# или
yarn add ts-utils-pro
# или
pnpm add ts-utils-pro
```
## Утилиты

### deepClone<T>(obj: T): T
Создает глубокую копию объекта или массива.
#### Особенности:
* Поддерживает вложенные объекты и массивы
* Сохраняет типизацию исходного объекта

```ts
import { deepClone } from 'ts-utils-pro';

const original = {
  users: [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' }
  ],
  meta: {
    createdAt: new Date()
  }
};

const clone = deepClone(original);

console.log(clone.users === original.users); // false
console.log(clone.meta.createdAt === original.meta.createdAt); // false
```

### debounce<F extends (...args: any[]) => any>(fn: F, ms: number): F
Создает "заторможенную" версию функции, которая выполняется только после определенного времени простоя.
#### Параметры:
* fn - Функция для дебаунса
* ms - Время задержки в миллисекундах

```ts
import { debounce } from 'ts-utils-rus';

const handleResize = debounce(() => {
  console.log('Размер окна изменился');
}, 250);

window.addEventListener('resize', handleResize);
```

### memoize<F extends (...args: any[]) => any>(fn: F): F
Мемоизирует результаты вызовов функции.

```ts
import { memoize } from 'ts-utils-rus';

const expensiveCalculation = memoize((n: number): number => {
  console.log('Вычисление...');
  return n * n;
});

expensiveCalculation(5); // Вычисление...
expensiveCalculation(5); // Возвращает кэшированный результат
```

### groupBy<T>(array: T[], key: keyof T): Record<string, T[]>
Группирует элементы массива по указанному ключу.

```ts
const inventory = [
  { type: 'fruit', name: 'Яблоко' },
  { type: 'vegetable', name: 'Морковь' },
  { type: 'fruit', name: 'Банан' }
];

const grouped = groupBy(inventory, 'type');
/*
{
  fruit: [
    { type: 'fruit', name: 'Яблоко' },
    { type: 'fruit', name: 'Банан' }
  ],
  vegetable: [
    { type: 'vegetable', name: 'Морковь' }
  ]
}
*/
```

### mergeDeep<T, U>(target: T, source: U): T & U
Глубокое слияние двух объектов.

```ts
const defaults = {
    settings: { theme: 'light', fontSize: 16 }
};

const user = {
    settings: { theme: 'dark' }
};

const merged = mergeDeep(defaults, user);
/*
{
  settings: {
    theme: 'dark', // Перезаписано
    fontSize: 16   // Сохранено
  }
}
*/
```

### once<F extends (...args: any[]) => any>(fn: F): F
Позволяет функции выполниться только один раз.

```ts
const init = once(() => {
    console.log('Инициализация');
});

init(); // 'Инициализация'
init(); // Ничего не происходит
```

### isEqual(a: unknown, b: unknown): boolean
Глубокое сравнение значений.

```ts
const a = { x: [1, 2], y: { z: 3 } };
const b = { x: [1, 2], y: { z: 3 } };

console.log(isEqual(a, b)); // true
```

### createEventEmitter<EventTypes>()
Создает EventEmitter с типизированными событиями.

```ts
const emitter = createEventEmitter<'click' | 'hover'>();

emitter.on('click', (payload: { x: number, y: number }) => {
    console.log(`Клик в (${payload.x}, ${payload.y})`);
});

emitter.emit('click', { x: 10, y: 20 });
```