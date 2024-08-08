/*
Task01

Requirement:
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false

Test data 1: 0, 1
Expected result 1: false

Test data 2: 0, 0
Expected result 2: true

Test data 3: 1, 0
Expected result 3: false

Test data 4: 1, 1
Expected result 4: true
*/
let num1 = 1;
let num2 = 1;

console.log(num1 === num2)



/*
Task02

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"

Test data 1: "v"
Expected result 1:
"v"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

*/

let char = 'B'

if(char.length !== 1) console.log("INVALID INPUT")
else if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) console.log(`"${char}" is a letter`)
else if(char >= '0' && char <= '9') console.log(`"${char}" is a digit`)
else console.log("INVALID INPUT")

/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an 
uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1: "a"
Expected result 1:
"a"  is a lowercase letter

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N"  is an uppercase letter

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/
char = 'N'
if(!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) console.log("INVALID INPUT")
else if((char >= 'A' && char <= 'Z')) console.log(`"${char}" is an uppercase letter`)
else console.log(`"${char}" is an lowercase letter`)


/*
Task04

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1: "a"
Expected result 1:
"a"  is not a special 
character

Test data 2: "5"
Expected result 2:
"5" is not a special 
character

Test data 3: "$"
Expected result 3:
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is not a special character
*/

char = '!'

if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) console.log(`"${char}" is not a special character`)
else console.log(`"${char}" is a special character`)

/*
Task05

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1: "a"
Expected result 1:
"a"  is a vowel

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N"  is not a vowel

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/
char = 'g'

// WAY1:
// if(!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) console.log('INVALID INPUT')
// else if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') console.log('is vowel')
// else console.log('is not vowel')


// WAY2:
// char = char.toLowerCase()
// if(!((char >= 'a' && char <= 'z'))) console.log('INVALID INPUT')
// else if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') console.log('is vowel')
// else console.log('is not vowel')

// WAY3:
let vowels = 'aeiouAEIOU'
if(!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) console.log('INVALID INPUT')
else if(vowels.includes(char)) console.log('is vowel')
else console.log('is not vowel')
