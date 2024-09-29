// Error handling - try, catch, finally blocks 

// try catch without any error 
try {
  console.log('THIS IS TRY BLOCK');
  console.log('Hello');
}
catch(error) {
  console.log('THIS IS CATCH BLOCK');
  console.log(error);
}


// try catch with an error 
try {
  console.log('THIS IS TRY BLOCK');
  //console.log(number); // ReferenceError
  const pi = 3.14;
  pi = 5; // TypeError
}
catch(error) {
  console.log('THIS IS CATCH BLOCK');
  console.log(error.message);
}


// try catch finally
try {
  console.log('THIS IS TRY BLOCK');
  console.log(number);
}
catch(error) {
  console.log('THIS IS CATCH BLOCK');
}
finally {
  console.log('THIS IS FINALLY BLOCK');
}
