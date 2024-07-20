// string 

let name = 'John';
console.log(name); // 'John'
console.log(typeof name); // 'string'


// number 
let num1 = 10; // absolute number
let num2 = 3.14; // floating/decimal number

console.log(num1, num2); // 10 3.14

console.log(typeof num1, typeof num2);

// boolean: are used with if else condition
let isRainy = false;
let isAuthenticated = true;

let result = '5' === 5;

let isUsernameCorrect = 'admin' === 'johndoe';

console.log(isRainy); // false
console.log(isAuthenticated); // true
console.log(result); // false
console.log(isUsernameCorrect); // false

console.log(typeof isAuthenticated); // 'boolean'
console.log(typeof result); // 'boolean'


// undefined vs null
let className1;
let className2 = undefined;

let courseName = null;

console.log(className1); // undefined
console.log(className2); // undefined
console.log(courseName); // null

console.log(typeof className1); // 'undefined'
console.log(typeof className2); // 'undefined'
console.log(typeof courseName); // 'object'


className1 = 'Batch-10';
courseName = 'SDET Program';
console.log(className1);
console.log(courseName);

console.log(typeof className1); // 'string'
console.log(typeof courseName); // 'string'


// Changing types 
let address = 'Chicago';
console.log(typeof address); // 'string'

address = 12345;
console.log(typeof address); // number

// bigint 
let n1 = 49857934867938459n;
let n2 = BigInt('49857934867938459');

console.log(n1);
console.log(n2);

console.log(typeof n1); // 'bigint'
console.log(typeof n2); // 'bigint'

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 we can store as number
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 we can store as number 

let safeMaxInt = 9007199254740992n; // it is recommended to go with bigint
let safeMinInt = -9007199254740992n; // it is recommended to go with bigint

// symbol
let s1 = Symbol('UA');

console.log(s1); // 'Symbol(UA)'
console.log(typeof s1); // 'symbol'