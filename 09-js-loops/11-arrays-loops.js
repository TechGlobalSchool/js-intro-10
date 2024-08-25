const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4

console.log('\n--------TASK-1--------\n');

let countPos = 0;

for(const number of numbers) {
  if(number > 0) countPos++;
}

console.log(countPos); // 4

// Count how many negative numbers you have in the array -> 3

console.log('\n--------TASK-2--------\n');

let countNeg = 0;

for(const number of numbers) {
  if(number < 0) countNeg++;
}

console.log(countNeg); // 3


let countNonPos = 0;

for(const number of numbers) {
  if(number <= 0) countNonPos++;
}

console.log(countNonPos); // 6


// Count how many even numbers you have in the array -> 7
console.log('\n--------TASK-3--------\n');

let countEven = 0;

for(const n of numbers) {
  if(n % 2 === 0) countEven++;
}

console.log(countEven); // 7


console.log('\n--------TASK-4--------\n');
// Count how many odd but not negative numbers you have in the array -> 2

let countNonNegOdd = 0;

for(const number of numbers) {
  if(number > 0 && number % 2 !== 0) countNonNegOdd++;
}

console.log(countNonNegOdd);