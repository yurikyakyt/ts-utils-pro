import { debounce } from '../src';
import { vi } from 'vitest';

it('Не дает часто выполняться функции', async () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced();
    debounced();
    await new Promise(r => setTimeout(r, 150));

    expect(fn).toHaveBeenCalledTimes(1);
});
