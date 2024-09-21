function print(str) {
  console.log(`Your string is = ${str}`);
}

function printFullname(fname, lname) {
  console.log(`${fname} ${lname}`);
}

function printSum(num1, num2) {
  console.log(`Sum is = ${num1 + num2}`);
}

// Export all these methods individually 
module.exports.print = print;
module.exports.printFullname = printFullname;
module.exports.printSum = printSum;