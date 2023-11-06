function replaceContent() {
  // alert("We are at this page");
  // here we use the getItem method to retrieve the data stored earlier using the key
  let jsondata = localStorage.getItem("Karthik");
  // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  let regarr = JSON.parse(jsondata);
  // we now have an array of objects where the first object is the object that contains all the data of the excel
  console.log(regarr);
  // here we access the first Object in the array using regarr[0]
  let x = regarr[0];
  //Looping through all the key value pairs in the object, all the keys that have an id present in the resumetemplate
  // are used to change the Text of that particular element to the text in the Excel
  for (const key in x) {
    console.log(key);
    let y = String(key);
    let nameElement = document.getElementById(y);
    console.log(nameElement);
    if (nameElement) {
      nameElement.innerText = x[y];
      console.log(nameElement.innerHTML);
    } else {
      console.error("Element with the specified ID not found.");
    }
  }
}
