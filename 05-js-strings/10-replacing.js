let str = 'I like apple and pineapple';

// replace apple with orange 
let strR1 = str.replace('apple', 'orange');

console.log(strR1); // 'I like orange and pineapple'
console.log(str); // 'I like apple and pineapple' 


// replace all apple occurrences with orange
let strR2 = str.replaceAll('apple', 'orange');

console.log(strR2); // 'I like orange and pineorange'


/*
replace()
TASK: used to replace the first occurrence of a substring within the original string
RETURN: it returns a new string with the replaced value
ARGUMENTS: takes two argument; target(substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static

replaceAll()
TASK: used to replace all occurrences of a substring within the original string
RETURN: it returns a new string with the replaced value
ARGUMENTS: takes two argument; target(substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static
*/


console.log('Hello everyone!'.replaceAll('e', 'a').replaceAll('o', 'U')); // 'HallU avaryUna!'