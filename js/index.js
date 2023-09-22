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
