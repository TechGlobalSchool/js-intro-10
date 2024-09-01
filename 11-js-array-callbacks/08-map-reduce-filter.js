/*
Assume you are given an array

const arr = [ el1, el2, el3, el4, el5, el6 ];


count, sum, average, min, max, shortest, longest, most expensive simply result being one simple result -> reduce method
returning some of the elements (subarray of the original) -> filter method
returning a same size new array with modified original array elements -> map
*/

const numbers = [-2, -5, 3, 0, 5, 8, 10]; 


// Get positive numbers -> [ 3, 5, 8, 10 ]
console.log(numbers.filter(x => x > 0));


// ['even', 'odd', 'odd', 'even', 'odd', 'even', 'even']
const evenOdd = numbers.map(x => {
  if(x % 2 === 0) return 'even';
  else return 'odd';
});

console.log(evenOdd);


// Sum of the numbers: 19

// let sum = 0;

// for(const number of numbers) {
//   sum += number;
// }

// console.log(sum);

// -2, -5, 3, 0, 5, 8, 10
// Using reduce to find sum of the numbers 

// 19
const finalResult = numbers.reduce((sum, number) => sum + number, 0);

console.log(finalResult);

// Count how many negative elements we have in the array
const countNeg = numbers.reduce((acc, curr) => {
  if(curr < 0) return acc + 1;
  return acc;
}, 0);

console.log(countNeg);