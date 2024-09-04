const obj = {
  first_name: 'Adam',
  last_name: 'Smith',
  date_of_birth: 1790,
  isAlive: false
};

// To sent this JS object to server, we need to convert to JSON string
// Serialization
// Reason for serialization to sent data to server
let jsonObject = JSON.stringify(obj);

console.log(obj);
console.log(jsonObject); // {"first_name":"Adam","last_name":"Smith","date_of_birth":1790,"isAlive":false}


// JSON string
let student = `{"DOB": "2000-10-10","EMAIL": "john@abc.com","FIRST_NAME": "John","LAST_NAME": "Doe","INSTRUCTOR_ID": 1}`;

// To be able to read the JSON string values, we need to convert it to JS object
// Deserialization
// Reason for deserialization is to read data easier

const JSObject = JSON.parse(student);

console.log(student);
console.log(JSObject);
console.log(JSObject.FIRST_NAME);
console.log(JSObject.LAST_NAME);
console.log(JSObject.EMAIL);


// REAL EXAMPLE:
/*
Go to https://www.techglobal-training.com/backend
Validate that the first student's full name is Tech Global
*/

let existing_students = `[
    {
        "STUDENT_ID": 1,
        "DOB": "2020-09-20T00:00:00.000Z",
        "EMAIL": "tech.global@techglobal.com",
        "FIRST_NAME": "Tech",
        "LAST_NAME": "Global",
        "INSTRUCTOR_ID": 1,
        "INSTRUCTOR_NAME": "Leyla Haddad"
    },
    {
        "STUDENT_ID": 2,
        "DOB": "1990-01-01T00:00:00.000Z",
        "EMAIL": "john.doe@techglobal.com",
        "FIRST_NAME": "John",
        "LAST_NAME": "Doe",
        "INSTRUCTOR_ID": 2,
        "INSTRUCTOR_NAME": "Robert Hass"
    },
    {
        "STUDENT_ID": 5407,
        "DOB": "2000-10-10T00:00:00.000Z",
        "EMAIL": "john@abc.com",
        "FIRST_NAME": "John",
        "LAST_NAME": "Doe",
        "INSTRUCTOR_ID": 1,
        "INSTRUCTOR_NAME": "Leyla Haddad"
    }
]`;

const studentJSObjects = JSON.parse(existing_students);
const fullname = studentJSObjects[0].FIRST_NAME + ' ' + studentJSObjects[0].LAST_NAME;

if(fullname === 'Tech Global') console.log('TEST PASSED!');
else console.log('TEST FAILED!');