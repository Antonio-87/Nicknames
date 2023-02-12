import Validator from '../app';

test('valid username', () => {
    const valid = new Validator('bodrichok23_53-live');
    expect(valid.validatorUsername()).toBeTruthy();
});

test('123.......', () => {
    const valid = new Validator('123bodrichok23_53-live');
    expect(valid.validatorUsername()).toBeFalsy();
});

test('.......123', () => {
    const valid = new Validator('bodrichok23_53-live123');
    expect(valid.validatorUsername()).toBeFalsy();
});

test('-.......', () => {
    const valid = new Validator('-bodrichok23_53-live');
    expect(valid.validatorUsername()).toBeFalsy();
});

test('.......-', () => {
    const valid = new Validator('bodrichok23_53-live-');
    expect(valid.validatorUsername()).toBeFalsy();
});

test('_.......', () => {
    const valid = new Validator('_bodrichok23_53-live');
    expect(valid.validatorUsername()).toBeFalsy();
});

test('......._', () => {
    const valid = new Validator('bodrichok23_53-live_');
    expect(valid.validatorUsername()).toBeFalsy();
});

test('more than 3 digits', () => {
    const valid = new Validator('bodrichok2353_-live');
    expect(valid.validatorUsername()).toBeFalsy();
});
