import { once } from '../src';

it('calls only once', () => {
    let counter = 0;
    const fn = once(() => ++counter);

    expect(fn()).toBe(1);
    expect(fn()).toBe(1);
    expect(counter).toBe(1);
});
