// use functions and variables before they're declared

// this will work since the function is hoisted
printHi(); // Hi

// function expression
function printHi() {
  console.log('Hi');
}

printHi(); // Hi


// variable hoisting 
console.log(fname); // undefined
var fname = 'John';

/*
var fname;
console.log(fname); // undefined

fname = 'John';
*/

console.log(arr); // undefined
var arr = [ 10, 15, 20 ];


for(let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log(i); // ReferenceError: i is not defined


console.log(address); // ReferenceError: address is not defined