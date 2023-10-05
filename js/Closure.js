//What is a closure?
//A function bundled together with it's lexical environment is known as closure.
//Whenever function is returned, even if its vanished in execution context but
// still it remembers the reference it was pointing to

//Closures have many functions and applications
// Data Hiding
// Encapsulation

//eg of Data Hiding
function counter() {
  let count = 0;
  return function Increase() {
    count++;
    console.log(count);
  };
}
//console.log(count) -> cannot acces count
console.log(counter()()); // -> only accesible through function

//Constructor Functions -> Pascal Naming Convention
//uses "this" keyword
function CreateObject(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(radius);
  };
}
const circle = new CreateObject(2);

//Factory function -> CamelCase Naming Convention, returns an object
