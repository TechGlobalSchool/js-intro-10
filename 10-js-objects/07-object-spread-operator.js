const arr1 = [ 1, 2, 3 ];
const arr2 = [ 3, 4, 5, 6 ];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // [ 1, 2, 3, 3, 4, 5, 6 ]

const car1 = {
  make: 'Tesla',
  model: 'S',
  year: 2024
};

const car2 = {
  ...car1,
  selfDrive: true
};

const car3 = {
  ...car2
}

console.log(car2); // { make: 'Tesla', model: 'S', year: 2024, selfDrive: true }

