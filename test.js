// const sum = require('./sumTest');
const templateStrings = require('templateStrings');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum.sum(1, 2)).toBe(3);
// });

test('Argument "Avishek" returns "Hello, Avishek!" on one line and "Your name lowercased is "avishek"". on the second line:', () => {
    expect(templateStrings.printHello('Avishek').toBe(`Hello, Avishek!
    Your name lowercased is "domenic".`));
});
