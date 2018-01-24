const defaultParam = require('./defaultParam');

test('Should return 0.5 for no input values', () => {
  expect(defaultParam()).toBe(0.5);
});
test('Should return 2 for undefined and 4', () => {
  expect(defaultParam(undefined, 4)).toBe(2);
});
test('Should return -1 for 0 and -2', () => {
  expect(defaultParam(0, -2)).toBe(1);
});
