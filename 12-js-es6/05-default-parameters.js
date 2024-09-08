function multiply(num1, num2 = 1) {
  return num1 * num2;
}


console.log(multiply(3, 5)); // 15
console.log(multiply(10)); // 10


function sum(num1, num2 = 1) {
  return num1 + num2;
}

console.log(sum(5, 10)); // 15
console.log(sum(7)); // 7


function setBrowser(browserName = 'chrome') {
  if(browserName === 'firefox') {
    console.log('Testing on Mozilla Firefox');
  }
  else if(browserName === 'safari') {
    console.log('Testing on Safari');
  }
  else if(browserName === 'edge') {
    console.log('Testing on Microsoft Edge');
  }
  else if(browserName === 'chrome'){
    console.log('Testing on Google Chrome');
  }
  else {
    throw new Error('The browser specified is not configured!!!');
  }
}

setBrowser('firefox'); // Testing on Mozilla Firefox
setBrowser('edge'); // Testing on Microsoft Edge

setBrowser(); // 