const student = {
  study: function () {
    console.log('STUDY');
  }
}

// BEFORE ES6
const mathStudent = Object.create(student);

mathStudent.fname = 'John';

mathStudent.calculate = function () {
  console.log('CALCULATE');
}

mathStudent.study();
mathStudent.calculate();


// Prototype before ES6
function Teacher() {

}

Teacher.prototype.teach = function () {
  console.log('TEACH');
}

Teacher.prototype.giveHomework = function () {
  console.log('GIVE HOMEWORK');
}


function MathTeacher() {

}

MathTeacher.prototype = Object.create(Teacher.prototype);

const mathTeacher1 = new MathTeacher();

mathTeacher1.teach();
mathTeacher1.giveHomework();