function greet(func) {
  console.log('Hello');
  func();
}

function getInfo() {
  console.log('Today is Saturday');
}

greet(getInfo);

/*
Hello
Today is Saturday
*/
