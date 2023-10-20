//Call , Apply and Bind
//using Call method, we can borrow functions from other objects
// It is also called function borrowing
// let name = {
//   firstname: "Karthik",
//   lastname: "Panicker",
//   printfullname(hometown) {
//     console.log(this.firstname + " " + this.lastname + " " + hometown);
//   },
// };
// console.log("Normal function call from object");
// name.printfullname("Mumbai");

// let person2 = {
//   firstname: "Ananya",
//   lastname: "Jha",
// };

//now if we want to perform the same action of printing the fullname like the earlier object, what we can do
// is that we can borrow it's function rather than redefining it again and again
// how do we do that? by using the call method
// every function has a call method
// the first argument passed with the call method must be the object that the this used in the function
// is supposed to point to
console.log("Function call using the call method and function borrowing");
name.printfullname.call(person2, "Delhi");

//now when we want to perform the same action for multiple objects, we can just take the function out and call it
// without the name of the object before it using the same syntax of the call method

//Apply method
//The only difference between call and apply is the way we pass arguments
// In the call method, all the other arguments after the object are passed on individually seperated by commas
// In the apply method , all the other arguments after the first object are passed as an arraylist
console.log("Function call using the apply method");
name.printfullname.apply(person2, ["Mumbai"]);

//Bind Method
//Similar to apply and call method, the only difference is that it binds the function to an object and returns
// a function that can be called later
// it doesn't call the function
console.log(
  "Function binding and then calling the function using the bind method"
);
let printMyname = name.printfullname.bind(person2, "Kashmir");
printMyname();

//Polyfill for bind method
//Normal bind
let name = {
  firstname: "Karthik",
  lastname: "Panicker",
};

let printMyName = function () {
  console.log(this.firstname + " " + this.lastname);
};
let x = printMyName.bind(name);
x();

//Custom Bind method
//What is polyfill
//sort of a fallback in case your browser doesn't have it's own bind function

let name2 = {
  firstname: "Ananya",
  lastname: "Jha",
};
Function.prototype.myBind = function () {
  return function () {};
};

let printName = printMyname.mybind(name2);
printName();
