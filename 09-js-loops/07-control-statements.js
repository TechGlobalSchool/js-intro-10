// break vs continue

// Print all the numbers from zero to ten (inclusive) except the even numbers

for(let i = 0; i <= 10; i++) {
  if(i !== 8) console.log(i);
}


// print all the numbers from 1 to 20 (inclusive) except 6, 13
// We don't want to see any number more than 15



for(let i = 1; i <= 20; i++) {
  if(i === 6 || i === 13) continue;
  if(i === 16) break;
  console.log(i);
}