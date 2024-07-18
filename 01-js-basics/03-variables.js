// var-let-const keywords are used for variables
// 1. let allows us to change the value of the variable at any point in the program

let firstName = 'John';

// Re-assign a new value to a variable
firstName = 'James';

console.log(firstName); // 'James'

firstName = 'Alex';
console.log(firstName); // 'Alex'

// 2. const stands for constant
const pi = 3.14;

console.log(pi); // 3.14

pi = 10; // Error: TypeError: Assignment to constant variable.

console.log(pi); // Not executed

// 3. var is the old let (before 2015)
var lastName = 'Doe';

lastName = 'Smith';

console.log(lastName); // 'Smith'


// Another difference bt let and const 
let city = 'Chicago'; // variable initialization = declare a variable and assign a value

let country; // declaring a variable or variable declaration
country = 'US'; // value assignment to a variable


// const firstMonth; // Not allowed, constant must always be initialized
// firstMonth = 'January';

const firstMonth = 'January'; // constants MUST be initialized

let numberOfStudentInBatch10; // undefined
console.log(numberOfStudentInBatch10); // 'undefined'

numberOfStudentInBatch10 = 20;
console.log(numberOfStudentInBatch10); // 20

