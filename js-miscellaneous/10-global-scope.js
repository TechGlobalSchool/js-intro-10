// Global variables
var fname = 'John';

// Accessing it globally
console.log(fname); // John

// Accessing it in a function
function changeName(str) {
  fname = str;
}

changeName('James');

console.log(fname); // James

// Accessing it in a loop
for(let i = 0; i < fname.length; i++) {
  console.log(fname[i]);
}

// Accessing it in an array
const names = [ 'Alex', 'Jane', fname ];
console.log(names);


// var-let-const act same for global scope 
var num1 = 10;
let num2 = 15;
const num3 = 20;

if(true) {
  console.log(num1, num2, num3);
}