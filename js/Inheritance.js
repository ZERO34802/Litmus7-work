//Inheritance in js is basically one object trying to access the methods and properties of other objects
//Whenever you create a js object,
//wothout our knowledge, js attatches this object to some hidden properties and functions
//It attaches an object , to our original object that we have created to let us get
// access to the properties and methods
//The object that is attatched is __proto__

//arr.__proto__ is the same as the Array.prototype which means that it is the same as the prototype of the Array object
//arr.__proto__.__proto__ is the same as the prototype of the Array.prototype which is equal to the Object.prototype
//The prototype for this object is null
//This is known as prototype chain

//Everything is an object in js

//Prototypal Inherticane ex
let object = {
  name: "Ananya",
  city: "Mumbai",
  getIntro() {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "Karthik",
};

//Never do this
object2.__proto__ = object;
object2.getIntro();
