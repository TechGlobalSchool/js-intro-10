/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL

Testing program with EDGE SCENARIOS 
1. 60
2. 59
3. 61
4. 0
5. 100
6. 'abc'
7. '#$'
8. Negative numbers
9. Numbers more than 100
*/

let exam_score = 150;

if(exam_score >= 60) {
    console.log('PASS');
}
else {
    console.log('FAIL');
}  


if(exam_score < 60) {
    console.log('FAIL');
}
else {
    console.log('PASS');
}


// If you execute a single line of code within if or else block, then you may omit the curly braces. BUT ONLY IF ONE LINE!!!

if(exam_score >= 60) console.log('PASS');
else console.log('FAIL');



if(true) console.log('Hello');
else {
    console.log('A');
    console.log('B');
}


/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 65;

if(age < 65) {
    console.log('YOU CANNOT GET RETIRED!!!');
}
else {
    console.log('YOU CAN GET RETIRED');
}

if(age >= 65) console.log('YOU CAN GET RETIRED');
else console.log('YOU CANNOT GET RETIRED!!!');


// Ternary operator: used for short if-else statements 
age >= 65 ? console.log('YOU CAN GET RETIRED') : console.log('YOU CANNOT GET RETIRED!!!');

// condition ? expression_true : expression_false;



let fname = 'Alex';
let first = true;

if(first) {
    console.log(fname[0]);
}
else {
    console.log(fname.at(-1));
}

first ? console.log(fname[0]) : console.log(fname.at(-1));