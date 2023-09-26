//Normal Function declaration

function getName() {
  console.log("My Name is Karthik");
}

//Arrow Function Declaration
//Function keyword is not used
//function name is assigned to a variable
var getName = () => {
  console.log("My Name is Karthik");
};

//Understanding execution context and var scope
var x = 1;
if (true) {
  var x = 20;
}
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

//this keyword
// if the function is a method in an object, "this" references the object itself
// references the object calling the current function ( if no function, then window object in browsers and global object in node)
//if function is being called globally, then it references the window object in browser and global object in node
console.log(this);
console.log(this.x);

//
var a = 10;

var fn = function () {
  var a = 15;

  console.log(a);

  var a = 20;
};

fn();
console.log(a);

function talk() {
  return "I am ${this.name}";
}
const me = {
  name: "Karthik",
  talk,
};

const you = {
  name: "Ananya",
  talk,
};

me.talk();
you.talk();
talk();

//Primitive Datatypes

//String
let name = "Karthik";
console.log("my string is " + name);
console.log("my string is " + typeof name);

//Number
let marks = 34;
console.log("my marks are " + marks);

//Boolean
let isPositive = true;
console.log("is positive has a value of " + isPositive);

//Null is also a primitive datatype but typeof gives object for null

//Reference Datatypes

//Array
//typeof for reference datatypes always gives object as answer

let myArr = [1, 2, 3, 4, "false"];
console.log(myArr);
console.log(typeof myArr);

//Object
let myObj = {
  name: "Karthik",
  age: 18,
  increaseage: function () {
    return (this.age += 1);
  },
};

//use of this keyword in myObj object
console.log(myObj.age);
console.log(myObj.increaseage());

//use of this keyword as global or window object
console.log(this);

function trying() {
  // this.skill = 100;
  console.log(this);
}

trying();
