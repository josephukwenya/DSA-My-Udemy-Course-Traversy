// Solution 1 - Using switch statement
// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = 'Invalid operator';
//   }

//   return result;
// }

// Solution 2 - Using if-else conditional statement
// function calculator(num1, num2, operator) {
//   let result;

//   if (operator === '+') {
//     result = num1 + num2;
//   } else if (operator === '-') {
//     result = num1 - num2;
//   } else if (operator === '*') {
//     result = num1 * num2;
//   } else if (operator === '/') {
//     result = num1 / num2;
//   } else {
//     result = 'Invalid operator';
//   }

//   return result;
// }

// Solution 3 - Using object lookup
function calculator(num1, num2, operator) {
  const operations = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': num2 !== 0 ? num1 / num2 : 'Cannot divide by zero',
  };
  return operations[operator] || 'Invalid operator';
}

// Solution 4 - Using functional programming with reduce
function calculator4(num1, num2, operator) {}

// Functional programming with reduce

module.exports = calculator;
