// spreading arrays 

const numbers1 = [ 1, 2, 3, 4 ];

const numbers2 = [...numbers1, 5, 6 ]; //should have all the elements from numbers1 and more elements like 5-6 

console.log(numbers2); // 1, 2, 3, 4, 5, 6

// max number = 6
// min number = 1

console.log(Math.max(...numbers2));
console.log(Math.min(...numbers2));


const person = {
  fname: 'John',
  lname: 'Doe',
  age: 25
};

const student = {
  ...person,
  program: 'SDET'
};

console.log(person);
console.log(student);