// function scope
function aFunc() {
  let variable = 'Hello';
}


console.log(variable); // ReferenceError: variable is not defined

function funcA() {
  let number1 = 10;

  function funcB() {
    let number2 = 99;
    console.log(number1); // 10
    console.log(number2); // 99
  }

  funcB();

  // console.log(number1); // 10
  // console.log(number2); // ReferenceError: number2 is not defined
}

// console.log(number1); // ReferenceError: number1 is not defined
// console.log(number2); // ReferenceError: number2 is not defined

funcA();