console.log(Math.PI); // 3.141592653589793

console.log(isFinite(Math.PI)); // true


console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5

let result = Math.abs(3 - 10);

console.log(result); // 7

// ceil() vs floor() vs round() vs trunc()

console.log(Math.ceil(10.01)); // 11
console.log(Math.ceil(10.99)); // 11

console.log(Math.floor(10.01)); // 10
console.log(Math.floor(10.99)); // 10

console.log(Math.round(10.01)); // 10
console.log(Math.round(10.49)); // 10
console.log(Math.round(10.50)); // 11
console.log(Math.round(10.51)); // 11
console.log(Math.round(10.99)); // 11

console.log(Math.trunc(10.01)); // 10
console.log(Math.trunc(10.49)); // 10
console.log(Math.trunc(10.50)); // 10
console.log(Math.trunc(10.51)); // 10
console.log(Math.trunc(10.99)); // 10

console.log(Math.trunc(0.99)); // 0

// min() vs max()
let num1 = 10, num2 = 5, num3 = -3;

let maxNum = Math.max(num1, num2, num3); 
let minNum = Math.min(num1, num2, num3); 

console.log(maxNum); // 10
console.log(minNum); // -3

console.log(Math.max(100, 200)); // 200
console.log(Math.max(-3, 10, 25, 0, 50, 43, -58)); // 50
console.log(Math.min(-3, 10, 25, 0, 50, 43, -58)); // -58

// pow() vs sqrt()
console.log(5 ** 2); // 25
console.log(Math.pow(5, 2)); // 25

let result2 = Math.pow(3, 3);

console.log(result2); // 27

console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(25)); // 5


let randomNumber = Math.random();

console.log(randomNumber); // a random number between 0 and 1 (0 included but 1 is excluded) 