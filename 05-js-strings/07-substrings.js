let str = 'TechGlobal';


// 1. get a substring at the beginning or in the middle -> Tech or Glo
console.log(str.substring(0, 4)); // 'Tech'
console.log(str.slice(0, 4)); // 'Tech'

console.log(str.substring(4, 7));
console.log(str.slice(4, 7));


// 2. get a substring starting from any index and going all the till the end -> Global or bal
console.log(str.substring(4)); // 'Global'
console.log(str.slice(4)); // 'Global'

console.log(str.substring(7)); // 'bal'
console.log(str.slice(7)); // 'bal'


// Difference 
let lan = 'JavaScript';


// Get the last 3 characters 
console.log(lan.substring(lan.length - 3));
console.log(lan.slice(-3));

// Sc 
lan.slice(4, 6);
lan.slice(-6, -4);


console.log('TypeScript'.substring(3, 0)); 
console.log('TypeScript'.slice(3, 0)); 


/*
slice()
TASK: retrieve substring from another string based on the given indexes
RETURN: returns a new substring 
ARGUMENTS: takes 1 or 2 index arguments, first one is the starting index (included), second is the ending index (excluded)
    NOTE: it will work with negative indexes as well
    NOTE: if the left index is greater than the right index, then it returns empty string. 
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static


substring()
TASK: retrieve substring from another string based on the given indexes
RETURN: returns a new substring 
ARGUMENTS: takes 1 or 2 index arguments, first one is the starting index (included), second is the ending index (excluded)
    NOTE: it will not work with negative indexes and converts them to zeros.
    NOTE: if the left index is greater than the right index, it modifies to correct way and give you a meaningful substring.
CHANGE ORIGINAL VALUE: does not modify the original value
STATIC or NON-STATIC: non-static
*/


console.log('Batch-10'.substring(-10, 100)); // 'Batch-10'
console.log('Batch-10'.substring(3, 100)); // 'ch-10'