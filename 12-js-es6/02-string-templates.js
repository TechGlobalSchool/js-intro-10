// backticks `` 


// 1. concatenation 
let fname = 'John';
let lname = 'Doe';

let fullname1 = fname + ' ' + lname;
let fullname2 = fname.concat(' ').concat(lname);

let fullname3 = `${fname} ${lname}`;

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

// 2. multiline instead using escape sequences 

console.log('Hello\nWorld');

console.log(`Hello
World`);