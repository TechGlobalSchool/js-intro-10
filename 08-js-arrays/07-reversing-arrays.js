const numbers = [ 10, 25, 50 ];
const booleans = [ true, false, false, false ];

const numbersReversed = numbers.reverse();
const booleansReversed = booleans.reverse();

console.log(numbers); // [ 50, 25, 10 ]
console.log(numbersReversed); // [ 50, 25, 10 ]

console.log(booleans); // [ false, false, false, true ]
console.log(booleansReversed); // [ false, false, false, true ]