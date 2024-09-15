class Program {
  static gotoAmazon() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isServer = Math.round(Math.random());
        if (isServer === 1) resolve("YOU ARE ON AMAZON APP!");
        else reject("AMAZON SERVER DOWN!");
      }, 1000);
    });
  }

  static selectProduct() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isFound = 1;
        if (isFound === 1) resolve("YOU FOUND THE PRODUCT!");
        else reject("NO PRODUCT FOUND!");
      }, 2000);
    });
  }

  static addToCart() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isCartWorking = 1;
        if (isCartWorking === 1) resolve("PRODUCT ADDED TO CART!");
        else reject("CART FUNCTION DOES NOT WORK!");
      }, 500);
    });
  }

  static checkout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isCheckoutWorking = 1;
        if (isCheckoutWorking === 1) resolve("PRODUCT ORDERED!");
        else reject("CHECKOUT FUNCTION DOES NOT WORK!");
      }, 1000);
    });
  }
}

module.exports.Program = Program;