const names = [ 'James', 'John', 'Alex', 'Mariia' ];

console.log('\n--------iteration of arrays with for...of loop--------\n');

for(const name of names) {
  console.log(name);
}


console.log('\n--------iteration of arrays with for loop--------\n');

for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


console.log('\n--------iteration of arrays with forEach method--------\n');
names.forEach((x) => console.log(x));

console.log('\n--------iteration of arrays with forEach method - uppercased--------\n');
// Print each name uppercased
names.forEach((name) => console.log(name.toUpperCase()));


// Print each names first letter and last letter together 
// Js
// Jn
// Ax 
// Ma
console.log('\n--------iteration of arrays with forEach method - first-last letters--------\n');

names.forEach((name) => {
  console.log(name[0] + name.at(-1));
});

// Print the names that has 4 letters
// John
// Alex

console.log('\n--------iteration of arrays with forEach method - names with 4 letters--------\n');

// for(const name of names) {
//   if(name.length === 4) console.log(name);
// }

names.forEach((name) => {
  if(name.length === 4) console.log(name);
});

// Store the length of each name in a different array 
// [ 'James', 'John', 'Alex', 'Mariia' ] -> [ 5, 4, 4, 6 ]

console.log('\n--------iteration of arrays with forEach method - length of names--------\n');

const result = [];

names.forEach((name) => {
  result.push(name.length);
});

console.log(result); // [ 5, 4, 4, 6 ]


console.log('\n--------iteration of arrays with map method - length of names--------\n');

const result2 = names.map((x) => {
  return x.length
});

console.log(result2);