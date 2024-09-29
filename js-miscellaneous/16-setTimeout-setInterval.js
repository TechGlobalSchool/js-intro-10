// console.log('Hello World');

// setTimeout(() => {
//   console.log('Hello World');
// }, 5000);


const interval = setInterval(() => {
  console.log('TechGlobal Batch10');
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10500);