import Validator from '../app';

test.each([
    { data: 'bodrichok23_53-live', expected: true },
    { data: '123bodrichok23_53-live', expected: false },
    { data: 'bodrichok23_53-live123', expected: false },
    { data: '-bodrichok23_53-live', expected: false },
    { data: 'bodrichok23_53-live-', expected: false },
    { data: '_bodrichok23_53-live', expected: false },
    { data: 'bodrichok23_53-live_', expected: false },
    { data: 'bodrichok_2353-live', expected: false },
    { data: 'bodrichok_-live', expected: false },
])('valid username', ({ data, expected }) => {
    const valid = new Validator(data);
    expect(valid.validatorUsername()).toEqual(expected);
});
