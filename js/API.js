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
