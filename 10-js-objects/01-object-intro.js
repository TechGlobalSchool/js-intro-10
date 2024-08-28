// How to create an object

const obj1 = {}; // empty object
const obj2 = new Object(); // empty object

const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: '12345 -1234',
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};

// const SSN = person.SSN;
// const jobTitle = person.jobTitle;
// const numberOfKids = person.numberOfKids;

const { SSN, jobTitle, numberOfKids } = person;


// Getting properties using either dot notation or bracket notation
console.log(person.favNumber); // 7
console.log(person['favNumber']); // 7

// Updating properties 
person.jobTitle = 'SDET Lead';
person['jobTitle'] = 'SDET Lead';

console.log(person.jobTitle); // 'SDET Lead'

// TASK: Get the person's second fav city and ZIP Code
let secondFavCity = person.favCities[1];
let zipCode = person.address.ZIP;

console.log(secondFavCity, zipCode);

// Adding a new property
person.favProgrammingLanguage = 'TypeScript';
person['favColor'] = 'Yellow';
person.paymentDetails = [
  {
    name: 'John Doe',
    cardNumber: 1234567812345678,
    expDate: '11/11/2029',
    securityCode: 123,
    address: {
      street1: '123 Chicago St',
      street2: 'APT 2',
      city: 'Chicago',
      state: 'IL',
      ZIP: '12345 -1234',
      country: 'US'
    }
  },
  {
    accountNumber: 123456789,
    routingNumner: 123456789
  }
];


// get the security code 
console.log(person.paymentDetails[0].securityCode);


// deleting some properties from the object
delete person.address;
delete person['paymentDetails'];

console.log(person);