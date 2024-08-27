const batch10 = {
  program: 'SDET',
  numberOfStudents: 15,
  durationMonth: 6
};

const allKeys = Object.keys(batch10); // [ 'program', 'numberOfStudents', 'durationMonth' ]
const allValues = Object.values(batch10); // [ 'SDET', 15, 6 ]
const allEntries = Object.entries(batch10); // [ [ 'program', 'SDET' ], [ 'numberOfStudents', 15 ], [ 'durationMonth', 6 ] ]

console.log(allKeys);
console.log(allValues);
console.log(allEntries);

console.log('\n----------looping Object keys----------\n');

for(const key of Object.keys(batch10)) {
  console.log(key);
}


console.log('\n----------looping Object values----------\n');

for(const value of Object.values(batch10)) {
  console.log(value);
}


console.log('\n----------looping Object entries----------\n');

for(const entry of Object.entries(batch10)) {
  console.log(entry); // returns an entry as an array [ key, value ]
  console.log(entry[0]); // returns a key
  console.log(entry[1]); // returns a value
}


for(const [key, value] of Object.entries(batch10)) {
  console.log(key);
  console.log(value);
}