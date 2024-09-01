// without currying
function product(num1, num2) {
  return num1 * num2;
} 

console.log(product(3, 5)); // 15
console.log(product(8, 5)); // 40


// currying 
function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  }
}


const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(double(25)); // 50

console.log(triple(5)); // 15
console.log(triple(21)); // 63


function doMath(operator) {
  if(operator === '+') {
    return function (n1, n2) {
      return n1 + n2;
    }
  }
  else if(operator === '*') {
    return function (n1, n2) {
      return n1 * n2;
    }
  }
  else if(operator === '**') {
    return function (n1, n2) {
      return n1 ** n2;
    }
  }
}

const power = doMath('**');
const sum = doMath('+');

console.log(power(5, 3));
console.log(sum(10, 12)); // 22