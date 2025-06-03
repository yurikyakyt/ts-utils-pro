import { deepClone } from '../src';

it('Клонирует примитивы', () => {
    expect(deepClone(5)).toBe(5);
});

it('Клонирует массивы', () => {
    const arr = [1, { a: 2 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
});

it('Клонирует даты', () => {
    const date = new Date();
    const cloned = deepClone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
});

it('Клонирует Map и Set', () => {
    const map = new Map([[{ id: 1 }, { val: 2 }]]);
    const set = new Set([{ id: 3 }]);

    const clonedMap = deepClone(map);
    const clonedSet = deepClone(set);

    expect(clonedMap).not.toBe(map);
    expect(clonedSet).not.toBe(set);
});
