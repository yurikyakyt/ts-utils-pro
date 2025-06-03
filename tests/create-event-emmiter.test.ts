import {createEventEmitter} from '../src';
import {vi} from "vitest";

it('emits and handles events', () => {
    const emitter = createEventEmitter<'start' | 'stop'>();
    const handler = vi.fn();

    emitter.on('start', handler);
    emitter.emit('start', 1, 2);
    emitter.off('start', handler);
    emitter.emit('start', 3);

    expect(handler).toHaveBeenCalledTimes(1);
});
