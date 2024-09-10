// Prototype
/*

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity; 
}

Product.prototype.sell = function (quantity) {
  if(quantity > this.quantity) throw new Error('Stock is not available!');
  this.quantity -= quantity;
};

Product.prototype.return = function (quantity) {
  this.quantity += quantity;
};

Product.prototype.getInventory = function () {
  console.log(`We have ${this.quantity} of ${this.name}.`);
};

Product.prototype.getPrice = function () {
  return this.price;
};

Product.prototype.discount = function (percentage) { // 10 
  this.price -= this.price * (percentage / 100);
}
*/

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity; 
  }

  sell(quantity) {
    if(quantity > this.quantity) throw new Error('Stock is not available!');
    this.quantity -= quantity;
  }
  
  return(quantity) {
    this.quantity += quantity;
  }
  
  getInventory() {
    console.log(`We have ${this.quantity} of ${this.name}.`);
  }
  
  getPrice() {
    return this.price;
  }
  
  discount(percentage) { // 10 
    this.price -= this.price * (percentage / 100);
  }
}


const phone = new Product('iPhone 16', 1000, 20);

phone.getInventory();
console.log(phone.getPrice());
phone.discount(20);
console.log(phone.getPrice());

phone.sell(5);
phone.getInventory();

phone.return(2);
phone.getInventory();