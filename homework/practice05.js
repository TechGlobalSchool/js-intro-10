/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

let num = 78;
if(num < 1 || num > 100) console.log("Number is not in range of 1-100")
else{
    if(num < 51) {
        console.log('First half')
        if(num <= 25) console.log('First Quarter')
        else console.log('Second Quarter')
    }
    else {
        console.log('Second half')
        if(num <= 75) console.log('Third Quarter')
        else console.log('Fourth Quarter')
    } 

}


/*
Task02

Requirement:
Assume you are given 3 numbers between 1 and 100 
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false

Test data 1: 2, 4, 6
Expected result 1: true

Test data 2: 68, 44, 2
Expected result 2: true

Test data 3: 10, 20, 25
Expected result 3: false

Test data 4: 51, 67, 99
Expected result 4: false
*/
let num1 = 2;
let num2 = 4;
let num3 = 77;

console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0)


/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/
// if(letter) print letter
// else if(digit) print digit
// else if(space) print space
// else print special character

let char = ' '

if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) console.log('Letter')
else if(char >= '0' && char <= '9') console.log('Digit')
else if(char === ' ') console.log('Whitespace')
else console.log('Special Character')

/*
Task04

Write a function named hasBlue() which takes a string argument 
and returns true if the string has an occurrence of blue word, 
returns false otherwise.
NOTE: Ignore upper/lower cases.

Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/
const hasBlue = (str) => str.toLowerCase().includes('blue');


console.log(hasBlue('Hello World'))
console.log(hasBlue('Javabluescript'))
console.log(hasBlue('Tech Blue Global'))
console.log(hasBlue('1234'))
console.log(hasBlue('ABLUEC'))

/*
Task05

Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.

Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")    -> false
startT("ABC")    -> false
*/

const startT = str => {
    //return str[0] === 't' || str[0] === 'T'
    //return str.toLowerCase()[0] === 't'
    return str.toLowerCase().startsWith('t')
}

console.log(startT('Hello World'))
console.log(startT('typescript'))
console.log(startT('TechGlobal'))
console.log(startT('1234'))
console.log(startT('ABC'))
