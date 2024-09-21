const sum = (num1, num2) => num1 + num2;
const product = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const power = (num1, num2) => num1 ** num2;


// Enhanced Object Literals
const Calculator = {
  sum,
  product,
  divide,
  power
};

module.exports.Calculator = Calculator;