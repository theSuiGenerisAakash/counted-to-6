const restParam = require('./restParam');

test('Should return 3 for 1,3,5 :', () => expect(restParam(1, 3, 5)).toBe(3));
test('Should return 0.0 for no input values:', () => expect(restParam()).toBe(0.0));
test('Should return Infinity for Infinity, Infinity:', () => expect(restParam(Infinity, Infinity)).toBe(Infinity));
test('Should return Infinity for Infinity, -3:', () => expect(restParam(Infinity, -3)).toBe(Infinity));
test('Should return NaN for Infinity, -Infinity:', () => expect(restParam(Infinity, -Infinity)).toBe(NaN));
test('Should return 0 for no input', () => expect(restParam()).toBe(0.0));
