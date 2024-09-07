{
  var v1 = 'One';
  let v2 = 'Two';
  const v3 = 'Three';

  console.log(v1); // One
  console.log(v2); // Two
  console.log(v3); // Three
}

v1 = 'John Doe';
console.log(v1); // One

// console.log(v2); // ReferenceError: v2 is not defined
// console.log(v3); // ReferenceError: v3 is not defined


let fname = 'John';

if(true) {
  let gender = 'female';
  if(gender === 'female') fname = 'Jane';
}

console.log(gender); // ReferenceError: gender is not defined
console.log(fname); // 'Jane'