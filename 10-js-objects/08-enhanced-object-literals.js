// Before ES6
let make = 'Tesla';
let model = 'S';
let year = 2023;

const car1 = {
  make: make,
  model: model,
  year: year
};

// After ES6 - enhanced object literals
const car2 = {
  make,
  model,
  year
};

console.log(car1);
console.log(car2);