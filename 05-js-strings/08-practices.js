/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello


*/

let str1 = 'Saturday';

console.log(str1.slice(-5));
console.log(str1.slice(str1.length-5));
console.log(str1.substring(str1.length-5));


// if(str1.length < 5) throw Error('This string does not have 5 characters!!!');
// else console.log(str1.slice(-5));

/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = '123';

let first3 = str2.slice(0, 3);
let last3 = str2.slice(-3);
let firstLast3 = first3 + last3;

console.log(firstLast3);

function firLas3Chars(str) {
    if(str.length < 3) throw Error('This string has length less than 3!!!');
    else return str.slice(0, 3) + str.slice(-3);
} 

console.log(firLas3Chars('Sunday')); // 'Sunday'
console.log(firLas3Chars('Tatyana')); // 'Tatana'
console.log(firLas3Chars('Hello World')); // 'Helrld'
console.log(firLas3Chars('ab')); // 