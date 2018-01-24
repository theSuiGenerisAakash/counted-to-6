const destruct = require('./destruct');

test('Argument [1, "jdoe", "jdoe@example.com", "John", "Doe"] should return jdoe and jdoe@example.com', () => {
  expect(destruct([1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'])).toEqual({ username: 'jdoe', email: 'jdoe@example.com' });
});

test('Argument [1, "jdoe", "jdoe@example.com", "John"] should return jdoe and jdoe@example.com', () => {
  expect(destruct([1, 'jdoe', 'jdoe@example.com', 'John'])).toEqual({ username: 'jdoe', email: 'jdoe@example.com' });
});

test('Argument [] should return undefined', () => {
  expect(destruct([])).toEqual({ username: undefined, email: undefined });
});
