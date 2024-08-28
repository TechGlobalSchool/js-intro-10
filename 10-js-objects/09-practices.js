/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/

const student = {
  firstName: "Alex",
  lastName: "Smith",
  hobbies: ["Soccer", "Watching movies"],
  exam_scores: {
    midterm: 60,
    final: 90,
  },
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);

/*
Find and print average of exam scores -> 75
*/

console.log((student.exam_scores.midterm + student.exam_scores.final) / 2); // 75

// Better solution for more exams
const allScores = Object.values(student.exam_scores);

let sum = 0;

for (const score of allScores) {
  sum += score;
}

console.log(sum / allScores.length); // 75

/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const book = {
  name: "Amok",
  author: {
    firstName: "Stefan",
    lastName: "Zweig",
  },
  genre: "Novella",
};


const books = [
  {
    name: "Amok",
    author: {
      fname: "Stefan",
      lname: "Zweig",
    },
    genre: "Novella",
  },
  {
    name: "My Name Is Red",
    author: {
      fname: "Orhan",
      lname: "Pamuk",
    },
    genre: "Historical Novel",
  },
  {
    name: "1984",
    author: {
      fname: "George",
      lname: "Orwell",
    },
    genre: "Dystopian Literature",
  }
];

// Count the books where Author first name has an 'a' -> 2

let counter = 0;

for(const book of books) {
  if(book.author.fname.toLowerCase().includes('a')) counter++;
}

// for loop
// for(let i = 0; i < books.length; i++) {
//   if(books[i].author.fname.toLowerCase().includes('a')) counter++;
// }

console.log(counter); // 2


// Get all the names of the books in array -> [ 'Amok', 'My Name Is Red', '1984' ]

const bookNames = [];

for(const book of books) {
  bookNames.push(book.name);
}

console.log(bookNames);


// Another solution using forEach() method 
const bookNames2 = [];

books.forEach(book => {
  bookNames2.push(book);
});

console.log(bookNames2);

// Better solution 
console.log('Solution with map method', books.map(book => book.name));

const arr = [ 3, 5, 10 ];
console.log(arr.map(element => element * 2));
