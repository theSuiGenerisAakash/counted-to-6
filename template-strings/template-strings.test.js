const templateStrings = require('./template-strings');

test('Argument "Avishek" returns Hello, Avishek! on one line and Your name lowercased is "avishek". on the second line:', () => {
  expect(templateStrings('Avishek')).toBe(`Hello, Avishek!
    Your name lowercased is "avishek".`);
});

test('Argument "" returns Hello, ! on one line and Your name lowercased is "". on the second line:', () => {
  expect(templateStrings('')).toBe(`Hello, !
    Your name lowercased is "".`);
});
