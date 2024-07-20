/*
    'Toyota', 'Tesla', 'Honda', 'BMW'
    7, 6, 5, 25
*/

let favNumber = 7;
let firstKidName = 'Alex';

const cars = [ 'Toyota', 'Tesla', 'Honda', 'BMW' ];
const numbers = [ 7, 6, 5, 25, 100 ];

console.log(cars); // [ 'Toyota', 'Tesla', 'Honda', 'BMW' ]
console.log(numbers); // [ 7, 6, 5, 25 ]

// Getting a particular element from an array using index
// Index of the elements in an array always starts with zero 
console.log(cars[2]); // 'Honda'

console.log(numbers[1]); // 6

// Updating the existing elements with new values 
cars[0] = 'GMC';

console.log(cars); // [ 'GMC', 'Tesla', 'Honda', 'BMW' ]

cars[3]; // 'BMW'

let myFavCar = cars[3];

// Getting the size of an array
// length is an array property which returns back the total number of elements in the array
console.log(cars.length); // 4
console.log(numbers.length); // 5



const students = [ 'Alex', 'John', 'Jane', 'Mariia' ];

console.log(students[-1]); // undefined
console.log(students[4]); // undefined

students[2] = 'Jessie'; // allowed even if array is declared with const

console.log(students);

// students = 1; // not allowed since the array is declared with const
// console.log(students); // Error

students[6] = 'Data';
console.log(students); // [ 'Alex', 'John', 'Jessie', 'Mariia', 'Data' ]
console.log(students.length); // 7


// Creating an array with the constructor 
const array = new Array('Mariia', 25, null, undefined, Symbol('Hello'), 25n);
const array2 = [ 'Mariia', 25, null, undefined, Symbol('Hello'), 25n ];

console.log(typeof array); // 'object'
console.log(typeof array2); // 'object'
console.log(typeof cars); // 'object'
console.log(typeof numbers); // 'object'


// Accessing the first and last element in the array dynamically
const nums = [ 10, 20, 30, 40 ];

let first = nums[0]; // 
let last = nums[ nums.length - 1 ];

console.log(first);
console.log(last);