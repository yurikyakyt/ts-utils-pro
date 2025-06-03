import { memoize } from '../src';

it('memoizes calls with same args', () => {
    const fn = vi.fn((x: number) => x * 2);
    const m = memoize(fn);

    expect(m(2)).toBe(4);
    expect(m(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
});
