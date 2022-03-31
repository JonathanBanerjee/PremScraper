//Learning how to use Jest with this test
const allfunctions = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(allfunctions.sum(1, 2)).toBe(3);
});

test('Subtracts 2 - 2 to equal 0', () => {
  expect(allfunctions.sum1(2, 2)).toBe(0);
});

test('Multiplies 89 x 201 to equal 17889', () => {
  expect(allfunctions.sum2(89, 201)).toBe(17889);
});

test('Divides 90 / 10 to equal 9', () => {
  expect(allfunctions.sum3(90, 10)).toBe(9);
});