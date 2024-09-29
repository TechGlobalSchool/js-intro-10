// Custom errors - we use throw keyword to throw an error

function checkAge(age) {
  if(age < 13) throw new Error('YOU CANNOT CREATE AN ACCOUNT!!!');
  else console.log('FILL YOUR PAYMENTS DETAILS');
}

try {
  checkAge(10);
}
catch(error) {
  console.log(error.message);
}

console.log('HAVE A GOOD DAY!');