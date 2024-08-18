// Array: stores multiple elements

const myNumberArray = [ 1, 2, 3, 4, 5 ];

// Printing the array
console.log(myNumberArray); // [ 1, 2, 3, 4, 5 ]

// Size of the array: how many elements we have in the array
let size = myNumberArray.length; // 5

console.log('The size of the array is =', size);

// Accessing array elements using indexes/indices
let elementAtIndex2 = myNumberArray[2]; // 3

console.log(elementAtIndex2); // 3

// Updating array elements using indexes
myNumberArray[4] = 99;

console.log(myNumberArray[4]); // 99

// Get first element in the array 
console.log(myNumberArray[0]); // 1

// Get last element in the array
console.log(myNumberArray[myNumberArray.length - 1]); // 99

// Creating an array using constructor 
const myWords = new Array('I', 'Like', 'Arrays'); // [ 'I', 'Like', 'Arrays' ]

console.log(myWords); // [ 'I', 'Like', 'Arrays' ]


const arr = []; // empty array or new Array()
arr.length; // 0

arr[5] = 10; // [ , , , , , 10 ]

console.log(arr);
console.log(arr.length); // 6


// Mix data in the array

const mix = [ 10.53963, 'Good', null, undefined, 5, NaN, true, 2 == '2' ];
console.log(mix.length); // 8

mix[1].length; // 4
mix[1].slice(0, 2); // 'Go'

console.log(mix[0].toFixed(2)); // 10.54

const numbers = [ 5, 10, 15, 7 ]; 

numbers[10]; // undefined 
numbers[-1]; // undefined
numbers[4]; // undefined