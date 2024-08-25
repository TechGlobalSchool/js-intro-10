const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log('\n--------TASK-1--------\n');
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
  if(i % 2 === 0) sum += numbers[i];
}

console.log(sum);

console.log('\n--------TASK-2--------\n');
// Find the product of numbers that has odd index -> 4 * 3 * 2 -> 24

let product = 1;

for(let i = 0; i < numbers.length; i++) {
  if(i % 2 !== 0) product *= numbers[i];
}

console.log(product);


let sumOfEven = 0;
let productOfOdd = 1;
let index = 0;

for(const num of numbers) {
  if(index % 2 === 0) sumOfEven += num;
  else productOfOdd *= num;
  index++;
}

console.log(sumOfEven); // 19
console.log(productOfOdd); // 24
