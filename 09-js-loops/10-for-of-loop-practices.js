const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ]; 

// Log each name

console.log('\n--------TASK-1 for loop--------\n');

for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('\n--------TASK-1 for...of loop--------\n');

for(const name of names) {
  console.log(name);
}


// Count how many names starts with j or J  -> 3
console.log('\n--------TASK-2 for loop--------\n');
let countJ2 = 0;

for(let i = 0; i < names.length; i++) {
  if(names[i][0].toLowerCase() === 'j') countJ2++;
}

console.log(countJ2);

console.log('\n--------TASK-2 for...of loop--------\n');

let countJ1 = 0;

for(const name of names) {
  if(name[0].toLowerCase() === 'j') countJ1++;
}

console.log(countJ1);


// 'John', 'Jane', 'Alex', 'Max', 'james'
// Count how many names have length of 4  -> 3
console.log('\n--------TASK-3 for...of loop--------\n');

let count4 = 0;

for(const name of names) {
  if(name.length === 4) count4++;
}

console.log(count4); // 3

console.log('\n--------TASK-3 for loop--------\n');

count4 = 0;

for(let i = 0; i < names.length; i++) {
  if(names[i].length === 4) count4++;
}

console.log(count4);