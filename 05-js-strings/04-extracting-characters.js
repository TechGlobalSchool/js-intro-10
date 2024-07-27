// property access with [] vs charAt() vs codeCharAt() vs at()

let str = 'TechGlobal';

// Get the first character
console.log(str[0]); // 'T'
console.log(str.charAt(0)); // 'T'
console.log(str.at(0)); // 'T'

console.log(str.charCodeAt(0)); // 84


// Get the last character 
console.log(str[str.length - 1]); // 'l'
console.log(str.charAt(str.length - 1)); // 'l'
console.log(str.at(str.length - 1)); // 'l'

console.log(str.at(-1)); // 'l'


let city = 'Rome'; // 0 1 2 3 

console.log(city[-1]); // undefined
console.log(city.charAt(-1)); // ''
console.log(city.at(-1)); // 'e'


console.log(city[4]); // undefined
console.log(city.charAt(4)); // ''
console.log(city.at(4)); // undefined

/*
[] property access is the most used when getting characters starting from left index (0)
    [0] returns the first character
    [1] returns the second character
at() method is useful getting characters starting from left index using negative indices
    at(-1) returns the last character
    at(-2) returns the second last character

[] property access 
TASK: gets a single character from the string using an index
RETURN: returns the single character as a string 
    NOTE: it returns undefined if the given index is not valid for the string
ARGUMENTS: index 
CHANGE ORIGINAL VALUE: does not modify the original value


charAt() method
TASK: gets a single character from the string using an index
RETURN: returns the single character as a string 
    NOTE: it returns empty string ('') if the given index is not valid for the string
ARGUMENTS: index 
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static


charCodeAt() method
TASK: gets a single character's Unicode - ASCII Decimal representation from the string using an index
RETURN: returns the single character's Unicode - ASCII Decimal representation as a number 
    NOTE: it returns NaN if the given index is not valid for the string
ARGUMENTS: index 
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static


charAt() method
TASK: gets a single character from the string using an index - NOTE: it works backward as well using negative indexes
RETURN: returns the single character as a string 
    NOTE: it returns undefined if the given index is not valid for the string
ARGUMENTS: index 
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
*/
