// TASK: Create a Teacher prototype with fname, lname, age, field properties

// BEFORE ES6 - JS Prototypes
// constructor: it is a special method/function used to create objects of the prototype/class 
/*
function Teacher(fname, lname, age, field) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.field = field;
}

// Create 2 Teacher Prototype methods as teach and giveHomework
Teacher.prototype.teach = function () {
  console.log(`${this.fname} teaches ${this.field}!`);
}

Teacher.prototype.giveHomework = function () {
  console.log(`${this.fname} gives homework!`);
}


// Create 3 Teacher Objects
const teacher1 = new Teacher('Akin', 'Kaya', 25, 'JavaScript');
const teacher2 = new Teacher('Alex', 'Morgan', 47, 'Math');
const teacher3 = new Teacher('John', 'Doe', 45, 'Cypress');
const teacher4 = new Teacher('Mariia', 'X', 20, 'Science');
*/

// ES6 Classes
class Teacher {
  constructor(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
  }

  teach() {
    console.log(`${this.fname} teaches ${this.field}!`);
  }

  giveHomework() {
    console.log(`${this.fname} gives homework!`);
  }
}

const teacher1 = new Teacher('Akin', 'Kaya', 25, 'JavaScript');
const teacher2 = new Teacher('Alex', 'Morgan', 47, 'Math');
const teacher3 = new Teacher('John', 'Doe', 45, 'Cypress');
const teacher4 = new Teacher('Mariia', 'X', 20, 'Science');


teacher1.teach(); // 'Akin teaches JavaScript!'
teacher4.giveHomework(); // 'Mariia gives homework!'


// Store all the ages in an array -> [ 25, 47, 45, 20 ]
// Store all the first names in an array -> [ 'Akin', 'Alex', 'John', 'Mariia' ]
// Find and print the information of the oldest teacher -> Teacher { fname: 'Alex', lname: 'Morgan', age: 47, field: 'Math' }

const teachers = [ teacher1, teacher2, teacher3, teacher4 ];

const ages = [];

teachers.forEach((teacher) => ages.push(teacher.age)); 
console.log(teachers.map((teacher) => teacher.age));
console.log(teachers.map((teacher) => teacher.fname));


// for(let i = 0; i < teachers.length; i++) {
//   ages.push(teachers[i].age);
// }

// for(const teacher of teachers) {
//   ages.push(teacher.age);
// }

console.log(ages); // [ 25, 47, 45, 20 ]


// OLDEST TEACHER 
let oldest = teachers[0];

for(const teacher of teachers) {
  if(teacher.age > oldest.age) oldest = teacher;
}

console.log(oldest);

console.log(teachers.reduce((acc, curr) => acc.age > curr.age ? acc : curr, teachers[0]));
