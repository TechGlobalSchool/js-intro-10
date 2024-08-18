const objects = [ 'Phone', 'Watch', 'Mouse', 'Laptop' ];

// Retrieving elements using indexes or at() method
console.log(objects[0]); // 'Phone'
console.log(objects[1]); // 'Watch'

console.log(objects.at(0)); // 'Phone'
console.log(objects.at(1)); // 'Watch'


// Last element
console.log(objects[objects.length - 1]); 
console.log(objects.at(-1)); // 

// Second from the last 
console.log(objects[objects.length - 2]);
console.log(objects.at(-2)); // 

console.log(objects.at(20));
console.log(objects.at(-20));
