// const sum = require('./sumTest');
// const templateStrings = require('./template-strings');
// const arrowFunc = require('./arrowFunc');
// const arrowFunc2 = require('./arrowFunc');
// const destruct = require('./destruct');
// const spreadOp = require('./spreadOp');
// const restParam = require('./restParam');
// const defaultParam = require('./defaultParam');
// const makeImp = require('./makeImp');
// const tagtempl = require('./tagtempl');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum.sum(1, 2)).toBe(3);
// });

// test('Argument "Avishek" returns Hello, Avishek! on one line and Your name lowercased is "avishek". on the second line:', () => {
//     expect(templateStrings('Avishek')).toBe(`Hello, Avishek!
//     Your name lowercased is "avishek".`);
// });
//
// test('Argument "" returns Hello, ! on one line and Your name lowercased is "". on the second line:', () => {
//     expect(templateStrings('')).toBe(`Hello, !
//     Your name lowercased is "".`);
// });


// test('Function should return Ouch which is the context of the object as arrow is binded', expect(arrowFunc2()).toBe('Ouch');

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
// test('Min of [] should be Infinity',() => expect(spreadOp([])).toBe(Infinity));
// test('Min of [-Infinity, -Infinity] should be -Infinity',() => expect(spreadOp([-Infinity, -Infinity])).toBe(-Infinity));

// test('Should return 3 for 1,3,5 :', () => expect(restParam(1,3,5)).toBe(3));
// test('Should return 0.0 for no input values:', () => expect(restParam()).toBe(0.0));
// test('Should return Infinity for Infinity, Infinity:', () => expect(restParam(Infinity,Infinity)).toBe(Infinity));
// test('Should return Infinity for Infinity, -3:', () => expect(restParam(Infinity,-3)).toBe(Infinity));
// test('Should return NaN for Infinity, -Infinity:', () => expect(restParam(Infinity,-Infinity)).toBe(NaN));
// test('Should return 0 for no input', () => expect(restParam()).toBe(0.0));

// test('Should return 0.5 for no input values', () => {
//     expect(defaultParam()).toBe(0.5);
// });
// Rest of the test cases are covered by the verifier itself

// test('An empty string should be returing an empty string', () => {
//     expect(makeImp('')).toBe('');
// });
// //Always test before committing
// test('An empty string with 5 should be returing !!!!!', () => {
//     expect(makeImp('', 5)).toBe('!!!!!');
// });
// test('A string with undefined should be returning the string with! times the length of string', () => {
//     expect(makeImp('yes', undefined)).toBe('yes!!!');
// });

// test('Passing undefined and "<span>undefined</span> is not a string" gives "<b>undefined says</b>: &lt;span&gt;undefined&lt;span&gt; is not a string"',
// 	() =>  expect(tagtempl`<b>undefined says</b>: "<span>undefined</span> is not a string"``).toBe('<b>undefined says</b>: "&lt;span&gt;undefined&lt;/span&gt; is not a string"')
// );
//
// test('Passing "<undefined>" and undefined gives ""',
// 	() =>  expect(tagtempl`<b>undefined says</b>: "<span>undefined</span> is not a string"``).toBe('<b>undefined says</b>: ""')
// );
