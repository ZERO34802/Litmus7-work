const droparea = document.querySelector(".droparea");
//using querySelector method of document object to select the element with the class of .droparea
//adding an event listener to the element that we had selected earlier
//this event listener listens for any dragover event operation occuring over the area of the element
//dragover refers to when a file is dragged over the specefic area
droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("hover");
});
//The dragleave event is fired when a dragged element or text selection leaves a valid drop target.
droparea.addEventListener("dragleave", () => {
  // e.preventDefault();
  droparea.classList.remove("hover");
});
//The drop event is fired when an element or text selection is dropped on a valid drop target.
droparea.addEventListener("drop", (e) => {
  //prevents the default activity of the browswer
  //the prevent default method must be added so that the file is not opened in a new tab in the browser when dropped
  e.preventDefault();
  // dataTransfer property of event gives us the data that has been dropped, files[0] is used in the case multiple
  //files are dropped, we only need the first one
  const file = e.dataTransfer.files[0];
  if (
    file.type ==
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    // The FileReader object lets web applications asynchronously read the contents of files
    //FileReader can only access the contents of files that the user has explicitly selected,
    // either using an HTML <input type="file"> element or by drag and drop.
    const reader = new FileReader();
    reader.onload = function (e) {
      // The target property returns the element where the event occured.
      // the .result property returns the data stored inside the element where the event occured
      // The Uint8Array typed array represents an array of 8-bit unsigned integers.
      const data = new Uint8Array(e.target.result);
      // console.log(data);
      //the methods below are a part of the XLSX library
      const workbook = XLSX.read(data, { type: "array" });
      console.log(workbook);
      // The sheetName stores the name of the first sheet of the workbook
      const sheetName = workbook.SheetNames[0];
      // The sheet stores the first sheet of the workbook
      const sheet = workbook.Sheets[sheetName];

      console.log(sheet);
      // sheet_to_json produces an array of objects
      const output = XLSX.utils.sheet_to_json(sheet);
      // console.log(output);
      //stringify is used to stringify the array of objects as we need to store it in local storage and it is only
      // possible in the form of a string
      let jsondata = JSON.stringify(output);
      console.log(output);
      //since this is a json array of objects, we need to parse it into a regular array of objects to be able
      //to access them
      // setItem is used to set the data in the local storage of the browser as a key value pair that can be
      // retrieved later
      localStorage.setItem("Karthik", jsondata);
    };

    //readAsArrayBuffer is used to use the FileReader object to read the file specified as an Array Buffer
    // The ArrayBuffer object is used to represent a generic raw binary data buffer.
    reader.readAsArrayBuffer(file);
    droparea.classList.add("valid");
    // The innerText property returns Just the text content of the element and
    // all its children, without CSS hidden text spacing and tags,
    // except < script > and < style > elements.
    droparea.innerText = "File has been uploaded";
  } else {
    droparea.classList.add("invalid");
    droparea.innerText = "File has incorrect format";
  }
});

//if the target users of our service are located in a specefic region, then we do not need to use cdn's, we can simply
// just host our origin servers in that region
// they should not be used in financial services where data is dynamic and sensitive
