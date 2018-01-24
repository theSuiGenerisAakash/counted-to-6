const makeImp = require('./makeImp');

test('An empty string should be returing an empty string', () => {
  expect(makeImp('')).toBe('');
});
// Always test before committing
test('An empty string with 5 should be returing !!!!!', () => {
  expect(makeImp('', 5)).toBe('!!!!!');
});
test('A string with undefined should be returning the string with! times the length of string', () => {
  expect(makeImp('yes', undefined)).toBe('yes!!!');
});
