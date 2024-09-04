// Shallow copy issue with nested arrays
const groups1 = [
  'John',
  ['Alex', 'Mariia'],
  ['John', 'Jane']
];

const groups2 = [ ...groups1 ];

console.log(groups1); // [ 'John', [ 'Alex', 'Mariia' ], [ 'John', 'Jane' ] ]
console.log(groups2); // [ 'John', [ 'Alex', 'Mariia' ], [ 'John', 'Jane' ] ]

groups1[1].pop(); // removes Mariia

console.log(groups1); // [ 'John', [ 'Alex' ], [ 'John', 'Jane' ] ]
console.log(groups2); // [ 'John', [ 'Alex' ], [ 'John', 'Jane' ] ]


// Shallow copy issue with nested objects
const student1 = {
  fullname: 'John Doe',
  age: 25,
  address: {
      city: 'Chicago',
      state: 'IL'
  }
};

const student2 = {
  ...student1
};

console.log(student1); // { fullname: 'John Doe', age: 25, address: { city: 'Chicago', state: 'IL' }}
console.log(student2); // { fullname: 'John Doe', age: 25, address: { city: 'Chicago', state: 'IL' }}

student1.address.city = 'Des Plaines';

console.log(student1); // { fullname: 'John Doe', age: 25, address: { city: 'Des Plaines', state: 'IL' }}
console.log(student2); // { fullname: 'John Doe', age: 25, address: { city: 'Des Plaines', state: 'IL' }}


// DEEP COPY with nested arrays
const numbers1 = [
  [1, 2, 3],
  [3, 4, 5]
];

const numbers2 = JSON.parse(JSON.stringify(numbers1));

console.log(numbers1); // [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]
console.log(numbers2); // [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]

numbers1[0][0] = 999;

console.log(numbers1); // [ [ 999, 2, 3 ], [ 3, 4, 5 ] ]
console.log(numbers2); // [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]


// DEEP COPY with nested objects
const person1 = {
  fullname: 'John Doe',
  address: {
      city: 'Chicago'
  }
};

const person2 = JSON.parse(JSON.stringify(person1));

console.log(person1); // { fullname: 'John Doe', address: { city: 'Chicago' } }
console.log(person2); // { fullname: 'John Doe', address: { city: 'Chicago' } }

person1.address.city = 'Des Plaines';

console.log(person1); // { fullname: 'John Doe', address: { city: 'Des Plaines' } }
console.log(person2); // { fullname: 'John Doe', address: { city: 'Chicago' } }