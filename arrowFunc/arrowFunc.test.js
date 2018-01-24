const arrowFunc = require('./arrowFunc');

test('An argument of ["Fill", " ", "Umbrella"] should return "F U":', () => {
  expect(arrowFunc('["Fill", " ", "Umbrella"]')).toBe('[Fill, ,Umbrella] becomes "F U"');
});
test('An argument of [""] should return "":', () => {
  expect(arrowFunc('[""]')).toBe('[""] becomes ""');
});
test('An argument of ["Fill", "Hello", "Umbrella"] should return "FHU":', () => {
  expect(arrowFunc('["Fill", "Hello", "Umbrella"]')).toBe('[Fill,Hello,Umbrella] becomes "FHU"');
});
