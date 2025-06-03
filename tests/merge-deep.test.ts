import { mergeDeep } from '../src';

it('Глубоко сливает объекты', () => {
    const a = { x: { y: 1 } };
    const b = { x: { z: 2 } };

    expect(mergeDeep(a, b)).toEqual({ x: { y: 1, z: 2 } });
});
