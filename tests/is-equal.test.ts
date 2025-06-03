import { isEqual } from '../src';

it('глубоко сравнивает объекты', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
});
