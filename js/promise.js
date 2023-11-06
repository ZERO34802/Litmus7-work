const cart = ["shoes", "shirt", "tshirt", "bag"];

const promise = createOrder(cart);

//only called once
// only when promise object is filled, the callback function is called

//Result of Promise
//PromiseResult stores whatever Data is returned

//State of the Promise
//Current status of the promise
//Initially in pending state
//Finally in fullfilled state
//Rejected State also existed

//Promise is aresen object which is a placeholder for a certain period of time which is filled after an async operation
//Contain for a future value
//An object representing eventual completion or rejection of an async operation

//Promises and Promise chaining helps us get out of callback hell
//always return a promise when performing promise chaining

//change false to true in the validateCart function to get a successfull promise execution
//below is promise creation along with error handling
//always add return statements in a promise chaining from one promise .then to another
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    alert(err.message);
  });

// catch method is only concerned to check for error for it's promises that are above it in the promise chain

//creating a promise using a promise Constructor
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      //creating an error in js
      const error = new Error("Cart is not valid");
      reject(error);
    }
    //logic for creating order
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    return resolve("Payment successful");
  });
}

function validateCart(cart) {
  return false;
}
