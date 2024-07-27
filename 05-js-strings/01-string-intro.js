let fname = 'John'; 
let lname = "Doe";

let fullname1 = fname + ' ' + lname; // traditional concatenation with + operator 
let fullname2 = `${fname} ${lname}`; // concatenation using backticks (string templates - template literals) after ES6
let fullname3 = fname.concat(' ').concat(lname); // concatenation using concat() function

fname.concat(' '.concat(lname)); // this is anohter way to use concat() function


console.log(fullname1); // 'John Doe'
console.log(fullname2); // 'John Doe'
console.log(fullname3); // 'John Doe'


console.log(fname);
console.log(lname);



/*
concat() function
TASK: combines 2 strings together 
RETURN: returns a new string
ARGUMENTS: takes a string or multiple strings as arguments-parameters
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
*/

console.log('Hello'.concat(', ', 'Batch-10')); // 'Hello, Batch-10'
