const sum = require('./sumTest');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});
test('adds 1 + undefined to equal NaN', () => {
  expect(sum.sum(1, 2)).toBe(NaN);
});
