const { getRandomNumber } = require('../utils/MathHelper.js');


let written = 1;
let guess = undefined;
let attempts = 0;

while(written !== guess) {
  guess = getRandomNumber(1, 10);
  console.log(guess);
  attempts++;
}

console.log(`We got the matching number finally after ${attempts} attempts!`);


for(let i = 1; i <= 10; i++) {
  console.log(i);
}


let num = 1;

while (num <= 10) {
  console.log(num); // 1, 2
  num++;
}









// Infinite loop
while(true) {
  console.log('Hello');
}