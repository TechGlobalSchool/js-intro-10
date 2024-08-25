const cities = [ 'Rome', 'Chicago', 'Miami', 'Berlin', 'Tokyo', 'LA' ];


// console.log(cities[0]); // Rome
// console.log(cities[1]); // Chicago
// console.log(cities[2]); // Miami
// console.log(cities[3]); // Berlin
// console.log(cities[4]); // Tokyo

// for loop to iterate array elements
for(let i = 0; i <= cities.length-1; i++) {
  console.log(cities[i]);
}


// for...of to iterate array elements 
for(const city of cities) {
  console.log(city);
}


// log the numbers elements using for...of anf for loop

const numbers = [ 10, 20, 30, 40, 23 ]; 

for(const number of numbers) {
  console.log(number);
}

for(let i = 0; i <= numbers.length - 1; i++) {
  console.log(numbers[i]);
}

let j = 0;

while(j <= numbers.length - 1) {
  console.log(numbers[j]);
  j++;
}