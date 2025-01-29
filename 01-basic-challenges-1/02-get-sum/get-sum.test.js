const getSum = require('./get-sum');

test('Calculating the sum of two numbers', () => {
  // Test case inputs
  const num1 = 10;
  const num2 = 10;

  // Call the function
  const result = getSum(num1, num2);

  // Check if the result is equal to the expected sum
  expect(result).toBe(20);
});
