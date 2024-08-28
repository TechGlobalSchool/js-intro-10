
// Array destructuring
const arr = [ 'abc', 'xyz', 'hi', 'hello' ];


// let first = arr[0];
// let second = arr[1];
// let third = arr[2];
// let fourth = arr[3];

const [first, second, third, fourth] = arr;


// Object destructuring

const account = {
  username: 'TechGlobalSchool',
  email: 'tgschool@gmail.com',
  password: 'Test1234'
};


const { password, username, email } = account;

console.log(username); // TechGlobalSchool
console.log(email); // tgschool@gmail.com
console.log(password); // Test1234



