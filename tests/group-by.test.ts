import { groupBy } from '../src';

it('Группирует по ключам', () => {
    const data = [
        { type: 'a', val: 1 },
        { type: 'b', val: 2 },
        { type: 'a', val: 3 }
    ];

    expect(groupBy(data, 'type')).toEqual({
        a: [data[0], data[2]],
        b: [data[1]]
    });
});
