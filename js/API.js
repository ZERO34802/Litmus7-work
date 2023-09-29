//API stands for Application Programming Interface
//WEB API is an API for the web
//Browser API extends the functionality of the Browser
//Server API extends the functionality of the server

//Browser API
//All Browsers have built in API's that help to extend their functionality and perform more tasks

//Web API's also perform the same task and help in extending the browser's functionality
//Console API - Provides Methods to access the browser's console
console.log("Hello");

//Fetch API
//Methods to fetch data from web servers
//The callback function inside the fetch API only executes when the promise is completed or fullfilled
//callback functions from promises and mutation observers have higher priority than regular functions
//in the callback queue and are inserted in the microtask queue
fetch("https://api.netflix.com").then(function cbF() {
  console.log("FETCH API");
});

//seTimeout API
//provides a method to create a timer to help in including asynchronous functionality
setTimeout(function cbT() {
  console.log("This is after 2s");
}, 2000);

//Event Loops, Callback queue and Microtask Queue
console.log("Start");

setTimeout(function cbT() {
  console.log("This is after 2s");
}, 2000);
fetch("https://api.netflix.com").then(function cbF() {
  console.log("FETCH API");
});

console.log("End");

//1 -> First The execution context is created in the call stack during the first phase
//2 -> Secondly the functions are given a value
//3 -> The string "Start" is first printed to console using the console API
//4 -> The seTimeout API makes the callback function cbT() get registered in the WEB API's evironment
//5 -> The fetch API also makes the callback function cbF() get registered in the WEB API's Environment
// and also sends a fetch call to the API
// 6 -> The String "End" is then printed
// 7 -> Now after the program ends, the GEC is popped out of the call stack
// 8 -> The event loop is always monitoring the call stack to see if it is empty and if that is the case
// 9 -> If the timeout for the seTimeout has ended, it gets added to the callback queue and if the fetch api has received
// a response and the promise is completed, the callback function is pushed to the microtask queue
// 10 -> The event loop will first check the microtask queue if there is any function to be executed, if that is the case, it is pushed into the callstack
// 11 -> This is now executed and once all the functions are executed in that queue and the callstack is empty, the callback queue is checked
// 12 -> If any function is present in it, they are pushed into the callstack
