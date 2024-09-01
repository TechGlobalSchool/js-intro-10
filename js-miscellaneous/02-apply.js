// Borrowing a function for an object
function hi(str) {
  console.log(`Hi, ${str}!`);
}

hi('Data'); // Hi, Data!

const instructor = {
  name: 'John Doe'
}

hi.call(instructor, instructor.name); // Hi, John Doe!
hi.apply(instructor, [ instructor.name ]); // Hi, John Doe!


function getInfo( city, state ) {
  console.log(`Address is: ${city}, ${state}`);
}

const person = {
  fname: 'Mariia',
  lname: 'Bond'
};

getInfo.call(person, 'Chicago', 'IL'); // Address is: Chicago, IL
getInfo.apply(person, [ 'Chicago', 'IL' ]); // Address is: Chicago, IL