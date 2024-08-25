const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

console.log('\n--------TASK-1--------\n');
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;

for(const number of numbers) {
  sum += number;
}

console.log(sum); // 28
console.log(sum / numbers.length); // 4


console.log('\n--------TASK-2--------\n');
// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 -> 84

let product = 1;

for(let i = 3; i < numbers.length; i++) {
  product *= numbers[i];
}

console.log(product); // 84

// for...of loop 
// [3, 2, 2, 7]

product = 1;

for(const number of numbers.slice(3)) {
  product *= number;
}

console.log(product); // 84