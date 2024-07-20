const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'johndoe@gmail.com',
    phone: '000-000-0000'
};

console.log(user); //
console.log(typeof user); // 'object'

// Getting a specific information of the object using dot notation or bracket notation
console.log(user.firstName); // 'John'
console.log(user['email']); // 'johndoe@gmail.com'

// Updating the property values using dot notation or bracket notation
user.firstName = 'Alex';
user['phone'] = '111-1111-1111';

// Adding a new property to an object
user.password = 'test1234'; // or use user['password'] = 'test1234';

console.log(user);

// Removing an existing property from the object 
delete user.age;
delete user['lastName'];

console.log(user);


const student = {}; // empty object
const devices = []; // empty array
let str = ''; // empty string