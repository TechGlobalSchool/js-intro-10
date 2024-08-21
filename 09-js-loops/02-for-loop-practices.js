const { getRandomNumber } = require('../utils/MathHelper.js');

// Output the numbers from 1 to 10 (both inclusive) -> 1 2 3 4 5 ….

/*
start point: 1
end point: 10
update: increment ++
*/

for(let i = 1; i <= 10; i++) {
  console.log(i);
}

// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 ….
/*
start point: 100
end point: 0
update: decrement --
*/

for(let i = 100; i >= 0; i--) {
  console.log(i);
}


// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ….
for(let i = 0; i <= 50; i += 2) {
  console.log(i);
}

for(let i = 1; i <= 50; i++) {
  if(i % 2 === 0) console.log(i);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ….
for(let i = 0; i <= 50; i += 5) {
  console.log(i);
}

for(let i = 0; i <= 50; i++) {
  if(i % 5 === 0) console.log(i);
}

// Find sum of the numbers from 1 to 5 (both inclusive) -> 15
// 1 + 2 + 3 + 4 + 5 = 15

let sum = 0;

for(let i = 1; i <= 5; i++) {  
  sum += i; 
}

console.log(sum); 

// Find sum of the numbers from 10 to 15 (both inclusive) -> 75

let sum1 = 0;

for(let i = 15; i >= 10; i--) {
  sum1 += i;
}

console.log(sum1); // 75

// Find the product of all the numbers from 1 to 6 (both inclusive) -> 
// 1 * 2 * 3 * 4 * 5 * 6 -> 720

let product = 1;

for(let i = 1; i <= 6; i++) { 
  product *= i; 
}

console.log(product); // 720

// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
let str = 'TechGlobal School';

for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Count the total occurrences of letter o in TechGlobal School  -> 3

let s = 'TechGlobal School';

let countO = 0;

for(let i = 0; i < s.length; i++) {
  if(s[i] === 'o') countO++;
}

console.log(countO); // 3


// Output all the odd numbers from 1 to Random Number (between 10 and 20) (both inclusive) -> 1 3 5 7 9 ….
let r1 = getRandomNumber(10, 20);

console.log(`The random number is ${r1}`);

for(let i = 1; i <= r1; i += 2) {
  console.log(i);
}

for(let i = 1; i <= r1; i++) {
  if(i % 2 !== 0) console.log(i);
}

/*
Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

let r2 = getRandomNumber(1, 10);

console.log(`The random number is ${r2}`);

let prod = 1;

for(let i = 1; i <= r2; i++) { 
  prod *= i; 
}

console.log(prod); 


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);

/*
start point: min numbers between ran1 and ran2
end point: max numbers between ran1 and ran2
update: increment ++
*/

let min = Math.min(ran1, ran2);
let max = Math.max(ran1, ran2);

for(let i = min; i <= max; i++) {
  console.log(i);
}