//Functions

//Function Declaration OR Function Statement
function func() {
  return "This is a Function Declaration or also called a Function Statement";
}

//Function Expression
//The function is stored as a value in a variable
let b = function () {
  return "This is a Function Expression";
};

//The difference between Function expression and Function statement is related to the concept of hoisting

//Anonymous Function
// function () {

// }
//function written without an identifier or a function name
//However this syntax is not valid
//This will display error, it can only be used when assigning the function as a value to a variable

//First Class Functions
//The ability to use Functions as values and as arguments that can be passed into another function or returned from a function
//eg

let c = function () {
  return function xyz() {};
};
console.log(c());

//Difference between Parameters and Arguments
//Parameters are the data or variables that the function receives in the function
//Arguments are the data or variables that are passed into the function
function newfunc(param1, param2) {
  return "This is a function";
}

newfunc(a, b);

//Named Function Expression
let d = function abc() {
  return "This is a named function expression";
};

//Callback functions
//A callback is a function passed as an argument to another function

//Immediately Invoked Function Expression
//IIFE are those functions which are invoked as soon as it is defined
//most popular use of this is to avoid declaring variables in the global scope
//It is also known as self exceuting anonymous function
// you can name or leave them un-named

//USE CASES
// when we don't need to occupy space that the function takes for long period of time
//allows you to re-decclare a variable using the let keyword
//prevents pollution of the global js scope
//another benefit of IIFE's is performing asynchronous functions such as set timeout

//Order of Execution
//IIFE initialization and execution --> Script Execution --> Output
(function () {
  console.log("I am an immediately invoked Function Expression");
})();

//Asynchronous vs Synchronous Programming
