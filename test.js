// const sum = require('./sumTest');
// const templateStrings = require('./template-strings');
// const arrowFunc = require('./arrowFunc');
// const destruct = require('./destruct');
// const spreadOp = require('./spreadOp');
const restParam = require('./restParam');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum.sum(1, 2)).toBe(3);
// });

// test('Argument "Avishek" returns Hello, Avishek! on one line and Your name lowercased is "avishek". on the second line:', () => {
//     expect(templateStrings('Avishek')).toBe(`Hello, Avishek!
//     Your name lowercased is "avishek".`);
// });
//
// test('An argument of ["Fill", " ", "Umbrella"] should return "F U":', () => {
//     expect(arrowFunc('["Fill", " ", "Umbrella"]')).toBe('[Fill, ,Umbrella] becomes "F U"');
// });

// test('Argument [1, "jdoe", "jdoe@example.com", "John", "Doe"] should return jdoe and jdoe@example.com', () => {
//     expect(destruct([1, 'jdoe', 'jdoe@example.com', 'John', 'Doe'])).toEqual({username: 'jdoe', email: 'jdoe@example.com'});
// });
//
// test('Argument [1, "jdoe", "jdoe@example.com", "John"] should return jdoe and jdoe@example.com', () => {
//     expect(destruct([1, 'jdoe', 'jdoe@example.com', 'John'])).toEqual({username: 'jdoe', email: 'jdoe@example.com'});
// });
//
// test('Argument [] should return undefined', () => {
//     expect(destruct([])).toEqual({username: undefined, email: undefined});
// });

// test('Min of [0,-1,2,2] should be -1',() => expect(spreadOp([0,-1,2,2])).toBe(-1));
// test('Min of [] should be undefined',() => expect(spreadOp([])).toBe(Infinity));
// test('Min of [-Infinity, -Infinity] should be -Infinity',() => expect(spreadOp([-Infinity, -Infinity])).toBe(-Infinity));

test('Should return 3 for 1,3,5 :', () => expect(restParam(1,3,5)).toBe(3));
