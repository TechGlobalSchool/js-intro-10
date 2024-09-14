// Synchronous code
console.log('1');
console.log('2');
console.log('3');

setTimeout(() => {
  console.log('A');
}, 2000);

setTimeout(() => {
  console.log('B');
}, 1000);

setTimeout(() => {
  console.log('C');
}, 1500);

// OUTPUT: 
/*
What we expect
A
B
C
and takes 4.5 seconds
*/

/*
What actually happens
B
C
A
2 seconds
*/