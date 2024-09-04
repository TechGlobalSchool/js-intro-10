/*
Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.

NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 

<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least 2 characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.

Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true

using regex
*/

function isEmailValid(str) {
  if(str.includes(' ') || (str.indexOf('@') !== str.lastIndexOf('@')) || !str.includes('@') || !str.includes('.')) {
    return false;
  }
  else {
    let beforeAt = str.slice(0, str.indexOf('@'));
    let afterAtBeforeDot = str.slice(str.indexOf('@') + 1, str.lastIndexOf('.')); 
    let afterDot = str.slice(str.lastIndexOf('.') + 1);

    return beforeAt.length >= 2 && afterAtBeforeDot.length >= 2 && afterDot.length >= 2;
  }
}

console.log(isEmailValid("")); // false
console.log(isEmailValid("@gmail.com")); // false
console.log(isEmailValid("johndoe@yahoo")); // false
console.log(isEmailValid("johndoe@.com")); // false
console.log(isEmailValid("a@outlook.com")); // false
console.log(isEmailValid("johndoe@a.com")); // false
console.log(isEmailValid("johndoe@@gmail.com")); // false
console.log(isEmailValid("johndoe@gmail.com")); // true