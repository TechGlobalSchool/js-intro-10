const numbers = [10, 5, 100, 77, 50, 65, 0]; 

// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const result = numbers.filter((number) => number >= 50);

console.log(result);


// const result = [];

// for(const number of numbers) {
//   if(number >= 50) result.push(number);
// }

// console.log(result);


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

// without variables
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple'))); // [ 'Apple', 'Red apple', 'Pineapple' ]
console.log(fruits.filter(x => x.toLowerCase().indexOf('a') >= 0).length); // 4
console.log(fruits.filter(x => x.toLowerCase().indexOf('i') >= 0).length); // 2


// with variables
const fruitsWithApple = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));
const fruitsWithA = fruits.filter((fruit) => fruit.toLowerCase().includes('a'));
const fruitWithILength = fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length;

console.log(fruitsWithApple);
console.log(fruitsWithA.length);
console.log(fruitWithILength);

