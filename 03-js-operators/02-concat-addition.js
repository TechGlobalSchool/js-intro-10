// + operator is used for both concatenation and addition 
// concatenation is used for combining strings with strings or other data types 

/*
number + number         -> addition         number
number + string         -> concatenation    string 
string + number         -> concatenation    string
string + string         -> concatenation    string
*/

console.log(3 + 2 + 1); // 6
console.log(3 + 2 + '1'); // '51'
console.log(3 + '2' + 1); // '321'

console.log('5' - 2); // 3
console.log('5' * '3'); // 15

console.log('5Hello' * 2); // NaN = Not a Number

console.log(2 + 3 * 2 - 'Hello'); // NaN

console.log(true + 5); // 6
console.log(false * 5); // 0

console.log('abc' + true); // 'abctrue'
console.log('123' + false); // '123false'

console.log('true' + 123); // 'true123'