const names = [ 'Alex', 'John' ];

console.log(names); // [ 'Alex', 'John' ]

// Adding elements to the end of the array
console.log(names.push('Mariia')); // 3

console.log(names); // [ 'Alex', 'John', 'Mariia' ]

let result = names.push('Jane', 'Max', 'Data');

console.log(result); // 6

console.log(names); // [ 'Alex', 'John', 'Mariia', 'Jane', 'Max', 'Data' ]

// Removing elements from the end of the array
console.log(names.pop()); // 'Data'
names.pop(); // 'Max'
names.pop(); // 'Jane'
names.pop(); // 'Mariia'
names.pop(); // 'John'
names.pop(); // 'Alex'

console.log(names.pop()); // undefined

console.log(names); // [ 'Alex', 'John', 'Mariia' ]



const numbers = [ 10, 20, 30 ]; 
console.log(numbers);

// Adding elements to the beginning of the array 
numbers.unshift(99); // 4

console.log(numbers); // [ 99, 10, 20, 30 ]

numbers.unshift(15, 23); // 6
console.log(numbers); // [ 15, 23, 99, 10, 20, 30 ]

// Removing elements from the beginning of the array 
numbers.shift(); // 15
numbers.shift(); // 23
numbers.shift(); // 99 

console.log(numbers); // [ 10, 20, 30 ]

numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers.shift()); // undefined
