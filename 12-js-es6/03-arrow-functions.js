// function declaration
function sum(a, b) {
  return a + b;
}

// arrow function 
const sum = (a, b) => a + b;


// function declaration
function factorial(num) {
  if(num < 0) throw Error('Negative number detected!!!');

  let result = 1;

  for(let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// arrow function 
const factorial = (num) => {
  if(num < 0) throw Error('Negative number detected!!!');

  let result = 1;

  for(let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}