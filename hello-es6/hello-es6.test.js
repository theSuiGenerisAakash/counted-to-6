// jest.dontMock('./hello-es6');
const helloes6 = require('./hello-es6');

describe('Hello ES6 module', () => {
  it('Testing console.log with a string input', () => {
    expect(helloes6).toHaveBeenCalledWith('HELLO ES6');
  });
});
