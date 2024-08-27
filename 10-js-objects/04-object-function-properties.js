const car = {
  make: 'Tesla',
  model: 'Y',
  year: 2024,
  color: 'White',
  price: 49900.00,
  drive: function() {
    console.log(`${this.year} ${this.make} ${this.model} drives well!`);
  },
  getPrice: function() {
    return this.price;
  },
  getDiscountedPrice: function() {
    return this.price * 0.9;
  },
  info: function() {
    console.log(`${this.year} ${this.make} ${this.model} is $${this.price}`);
  }
};


car.drive(); // '2024 Tesla Y drives well!'
console.log(car.getPrice()); // 49900
console.log(car.getDiscountedPrice()); // 44910
car.info(); // 2024 Tesla Y is $49900

// Write a method called info and logs '2024 Tesla Y is $49900'


const bike = {
  brand: 'Honda',
  price: 10000,
  color: 'Yellow'
};


const person = {
  name: 'John',
  age: 18,
  city: 'Chicago',
  bike
};

console.log(person);
console.log(person.bike.brand);
