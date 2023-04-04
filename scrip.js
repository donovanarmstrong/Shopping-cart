/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const products = [];

/**
* ! Helper Function Created to Get Products
**/

function getProduct(productId, productList) {
  return productList.find((item) => item.productId === productId);
}

const products1 = {
  name: "Cherry",
  price: 1,
  quantity: 0,
  productId: 101,
  image: "./images/cherry.jpg",
};
products.push(products1);

const products2 = {
  name: "Orange",
  price: 2,
  quantity: 0,
  productId: 201,
  image: "./images/orange.jpg",
};
products.push(products2);

const products3 = {
  name: "Strawberry",
  price: 3,
  quantity: 0,
  productId: 301,
  image: "./images/strawberry.jpg",
};
products.push(products3);

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let itemOne = getProduct(productId, cart);
  let itemTwo = getProduct(productId, products);
  if (productId === itemTwo.productId && itemOne === itemTwo) {
    itemOne.quantity++;
  } else if (productId === itemTwo.productId) {
    itemTwo.quantity++;
    cart.push(itemTwo);
  }
}

// Original code that repeatedly added the product cards into the cart

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let addedItem = getProduct(productId, cart);
  addedItem.quantity++;
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let subtractItem = getProduct(productId, cart);
  if (subtractItem.quantity === 1) {
    removeProductFromCart(productId);
  } else {
    subtractItem.quantity--;
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  cart.forEach((product, index) => {
    if (product.productId === productId) {
      product.quantity = 0; //update product quantity to zero
      cart.splice(index, 1);
    }
  });
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products(quantity is needed to find)
  - cartTotal should return the sum/price of the products in the cart
  Price times quantity
  declare a variable that holds a value of a number
  use a for loop
*/
// Global Total Paid Variable need

function cartTotal() {
  let total = 0;
  cart.forEach((product) => {
    total += product.quantity * product.price;
  });
  return (total);
}

let totalPaid = 0;

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
//function pay(amount) {}

/**
 * ? Pay function
 * */

function pay(amount) {
  totalPaid += amount;
  let balance = totalPaid - cartTotal();

  if (totalPaid >= cartTotal()) {
    balance = totalPaid - cartTotal();
    totalPaid = 0; // Reset totalPaid only if payment is equal to or greater than cart total
  } else {
    balance = -(cartTotal() - totalPaid);
  }

  return balance;
}




/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  /*emptyCart,
  */

  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}