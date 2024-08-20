const batch10Students = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(batch10Students); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, 9 ] ]
console.log(batch10Students.length); // 3

// Second student from the second array
batch10Students[1][1]; // 5
batch10Students[2][2]; // 8
batch10Students[0][0]; // 1
batch10Students[2][1]; // 7

const newArr = batch10Students.flat();

console.log(batch10Students); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, 9 ] ]
console.log(newArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(newArr.length); // 9


const arr = [ 1, [2, 3, [4, 5, [6]]]];

console.log(arr.flat()); // [ 1, 2, 3, [ 4, 5, [ 6 ] ] ]
console.log(arr.flat(1)); // [ 1, 2, 3, [ 4, 5, [ 6 ] ] ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, [ 6 ] ]
console.log(arr.flat(3)); // [ 1, 2, 3, 4, 5, 6 ]




