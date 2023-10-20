let name = {
  firstname: "Akshay",
  lastname: "Saini",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " , " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
printMyName("India");

Function.prototype.mybind = function (...args) {
  console.log(args);
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
printMyName2("India");

Function.prototype.ourbind = function (x) {
  console.log("My name is : ", x);
  console.log(this);
};
let printMyName3 = printName.ourbind(name, "Dehradun", "Uttarakhand");
printMyName3("India");

//Function currying
//Currying
//Promises
//Array methods
//Bubbling
//Capturing
