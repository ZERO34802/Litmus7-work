//Arrow function inherits it's closest regular function's this scope while using the "this" keyword
//In regular functions the this keyword represented the object that called the function,
//which could be the window, the document, a button or whatever.
//With arrow functions the this keyword always represents the object that defined the arrow function.

// function User() {
//   this.name = "John Doe";
//   this.score = 20;
//   this.sayUser = function xyz() {
//     console.log(this.name);
//     let innerExpression = () => {
//       console.log(this);
//     };
//     innerExpression();
//     function secondInnerExpression() {
//       console.log(this);
//     }
//     secondInnerExpression();
//   };
// }
// let name = new User();
// name.sayUser();

// this changes based on the context of what it is doing
// Since the arrow function does not create an execution context, therefore it lexically takes it's
// this keyword
// For regular function statements, it creates a new execution context, now in this execution context, the this
// would refer to which object has invoked the function, since the function has been invoked right after
// defining it, it has been invoked by the function xyz's execution context by the window object since that itself has a new execution context

const Person = {
  name: "Karthik",
  fun1: function () {
    // console.log(this.name);
    let b = this.name;
    function innerfun() {
      console.log(this);
      console.log(b);
    }
    innerfun();
  },
};
Person.fun1();

//Q1
// var a = 5;

// const getParam = () => {
//   console.log(this.a);
// };
// getParam();

//Q2
// const user ={
//     firstName: "Danush",
//     getName(){
//         const firstname= "Renjith"
//         console.log(this.firstName)
//     }
// }

// user.getName()

//Q3
// function makeUser() {
//   return {
//     name: "danush",
//     ref: this,
//   };
// }

//Q3
// const user={
//     name :"Danush Renjith",
//     logMessage(){
//         console.log(this.name)
//     }
// }
// user.logMessage()
// setTimeout(()=>user.logMessage(),1000)

//when this is used inside a normal function, it targets the function's parent object
//Arrow function takes the value of this from it's parent function, if there is no parent function
// this points to the global object

//Inside a class, this points to the variables inside the class

//roadside coder this keyword
//call bind and apply
//prototyping
