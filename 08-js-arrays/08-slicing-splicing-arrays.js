const animals = [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ];

const animalsPartial1 = animals.slice(0, 3);
const animalsPartial2 = animals.slice(2, 4);

console.log(animals); // [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ]
console.log(animalsPartial1); // [ 'Cat', 'Dog', 'Cow' ]
console.log(animalsPartial2); // [ 'Cow', 'Monkey' ]


// Get the last 3 elements [ 'Cow', 'Monkey', 'Bird' ]
const animalsPartial3 = animals.slice(2);
const animalsPartial4 = animals.slice(-3);

console.log(animalsPartial3); // [ 'Cow', 'Monkey', 'Bird' ]
console.log(animalsPartial4); // [ 'Cow', 'Monkey', 'Bird' ]

console.log(animals.slice(6, 10)); // [ ]
console.log(animals.slice(2, 3)); // [ 'Cow' ]

const numbers = [5, -2, 10, 20, 50, -10];

console.log(Math.min(...numbers.slice(0, 3)));
console.log(Math.max(...numbers.slice(3)));

const result = [...numbers.slice(3), ...numbers.slice(0, 3)];

console.log(result); // [ 20, 50, -10, 5, -2, 10 ]


// Splice
// pop() -> removes the last element
// shift() -> removes the first element
// push() -> adds element to end 
// unshift() -> adds element to start

const cities = [ 'Chicago', 'Rome', 'Berlin' ]; 

// Adding an element in the middle of the array
cities.splice(1, 0, 'LA'); // []

console.log(cities); // [ 'Chicago', 'LA', 'Rome', 'Berlin' ]

// Adding multiple elements in the middle of the array
cities.splice(2, 0, 'Miami', 'Paris'); // []

console.log(cities); // [ 'Chicago', 'LA', 'Miami', 'Paris', 'Rome', 'Berlin' ]

// Removing elements from the middle of the array
cities.splice(4, 1); // ['Rome']

console.log(cities); // [ 'Chicago', 'LA', 'Miami', 'Paris', 'Berlin' ]

// Remove some elements and add new ones instead 
cities.splice(1, 2, 'Des Plaines', 'Porto', 'Brugge'); // ['LA', 'Miami']

console.log(cities); // [ 'Chicago', 'Des Plaines', 'Porto', 'Brugge', 'Paris', 'Berlin' ]

