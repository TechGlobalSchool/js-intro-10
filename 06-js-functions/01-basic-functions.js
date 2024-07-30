/*
Create a function which printts 'Hi' when invoked.
*/

// this is a void zero argument function
function sayHi() {
    console.log('Hi');
}

sayHi(); // 'Hi'

/*
Write a function which takes a string name as an argument
And it returns 'Hello, {name}!'

sayHello('Alex')    -> 'Hello, Alex!'
sayHello('Jane')    -> 'Hello, Jane!'
sayHello('Alina')    -> 'Hello, Alina!'
*/

function sayHello(name) { // this is local variable
    return `Hello, ${name}!`;
}

let name = 'Bermet';

let result = sayHello(name);

console.log(result); // 'Hello, Bermet!'


console.log(sayHello('John')); // 'Hello, John!'
console.log(sayHello(5)); // 'Hello, 5!'
console.log(sayHello(true)); // 'Hello, true!'


/*
Write a function named as greet which takes two argument as name and greeting and outputs '${greeting}, {name}!'

greet('Good Morning', 'John'); // Output: 'Good Morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
greet('Hi', 'Hicran'); // Output: 'Hi, Hicran!'
*/

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
}


greet('Hello', 'Malik');
greet('Hi', 'Ali');
greet('Good morning', 'John');
greet('Good night', 'Alex');

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}


console.log(sum(3, 5));
console.log(sum(4, 7));
console.log(sum(-2, 3));


/*
Write a function named as product which takes 3 number arguments and return their product

product(2, 4, 5) -> 40
product(3, 7, 6) -> 126
product(5, 0, 9) -> 0
*/

function product(n1, n2, n3) {
    return n1 * n2 * n3;
}

console.log(product(1, 5, 2) + 20); // 30
console.log(product(7, 5, 3) % 10); // 5
console.log(product(7, 5, 3)); // 105