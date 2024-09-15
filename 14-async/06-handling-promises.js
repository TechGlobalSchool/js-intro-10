const { Program } = require('../utils/Program.js');

/*
TEST CASE:
Go to https://www.amazon.com/   1 second
Select a product 2 seconds
Add to cart .5 second
Checkout 1 second
*/

// USING then() and catch()
/*
function test1 () {
  Program.gotoAmazon()
    .then(() => Program.selectProduct())
    .then(() => Program.addToCart())
    .then(() => Program.checkout())
    .catch((err) => console.log(err));
}

test1();
*/

'Hello'
  .toLowerCase()
  .charAt(1);

// USING async await
async function test2() {
  try {
    await Program.gotoAmazon();
    await Program.selectProduct();
    await Program.addToCart();
    await Program.checkout();
  }
  catch(err) {
    console.log(err);
    console.log('DO SOMETHING ELSE');
  }
}

test2();