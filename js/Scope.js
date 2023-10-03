//Lexical Scope , Scope chain
function a() {
  console.log(b);
}
var b = 10;

// here our output will not be undefined or an error, the output will be 10, which is the value of b

function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
// here as well, the output to our program will be 10 and not an error or undefined

// Scope
// The place where you can access a specefic variable or function in the code
// scope of a variable -  where can you access that particular variable
// is a variable inside the scope of a function ? these are two ways of looking at scope
// Lexical Environment -> lexical Environment consists of the local memory as well as the lexical environ
// -ment of the parent
// every execution context consists of a reference to the lexical environment to the parent or where the
// function has been called
// Lexical means in hierarchy or sequence
// In terms of code, it can also be seen as where that function or call is physically present
// lexical environment of global is NULL
// This whole sequence of searching in a chain of lexical environments is called Scope Chain

//Block Scope
