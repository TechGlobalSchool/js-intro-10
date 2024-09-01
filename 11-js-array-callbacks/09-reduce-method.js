const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];

// Count evens = 4

let countEven = numbers.reduce((acc, curr) => {
  if(curr % 2 === 0) return acc + 1;
  return acc;
}, 0);

console.log(countEven);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

let countFruitsHasApple = fruits.reduce((acc, curr) => {
  if(curr.toLowerCase().indexOf('apple') >= 0) return acc + 1;
  return acc;
}, 0);

let countFruitsHasI = fruits.reduce((acc, curr) => {
  if(curr.toLowerCase().indexOf('i') >= 0) return acc + 1;
  return acc;
}, 0);

let countFruitsEndsWithE = fruits.reduce((acc, curr) => {
  if(curr.toLowerCase().endsWith('e')) return acc + 1;
  return acc;
}, 0);

console.log(countFruitsHasApple);
console.log(countFruitsHasI);
console.log(countFruitsEndsWithE);


/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the 
greatest element when invoked.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	  -> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

/*
function max(arr) {
  return Math.max(...arr);
}
*/

/*
function max(arr) {
  let max = arr[0];

  for(const number of arr) {
    if(number > max) max = number;
  }

  return max;
}
*/

function max(arr) {
  let result = arr.reduce((acc, curr) => {
    if(acc > curr) return acc;
    return curr;
  }, arr[0]);

  return result;
}

console.log(max([0, 3, -9,  5, 8])); // 8
console.log(max([-2, 0, -7, 10, -5])); // 10


const min = [ 100, 50, 1000 ].reduce((acc, curr) => {
  if(acc < curr) return acc;
  return curr;
});

console.log(min);


let sumArr = [
  [1, 2, 3],
  [5, 10, 20],
  [100, 200]
].map((arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
})


// [6, 35, 300]

console.log(sumArr)



const objects = [ 'Remote', 'Computer', 'TV', 'Mouse', 'Notebook', 'AC' ];

// the shortest -> get the first shortest     -> AC
// the longest -> get the last longest        -> Notebook

let shortestObject = objects.reduce((acc, curr) => {
  if(curr.length < acc.length) return curr;
  return acc;
});

console.log(shortestObject); // AC