//Let and const are hoisted
// however they are in the temporal dead zone
// similar to var declarations, let and const are also given a placeholder value of undefined in the first
// phase
// however they are not stored in the global memory or object but in a different place which does not allow access
// to them until they are given a value
// what is a temporal dead zone?
// The time duration in between the hoisting and initialization of a let or const variable is known as
// Temporal dead zone
// when the value is assigned, the temporal dead zone ends

//Reference error
// when not initialized or declared

//Syntax error
// redeclaration or duplication of variable names

//level of strictness
// const > let > var

// In case of let, you can initialize it later or change its value later as well
// In case of const, you have to initialize it during declaration and cannot change it's value later

//It is most preferable to use const as much as possible and let after that

//How to avoid Temporal Dead Zone ?
//Always try to put your declarations and initializations on top of the code because then it gets initialized
// before the variables are used
