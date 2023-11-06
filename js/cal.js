let s = "";
// console.log(arr);

const addhere = document.getElementById("number-container");
function addElements() {
  for (let i = 9; i >= 1; i--) {
    const newDiv = document.createElement("button");
    newDiv.classList.add("containter-items");
    newDiv.innerHTML = i;
    addhere.appendChild(newDiv);
  }
}
addElements();
let buttons = document.querySelectorAll(".containter-items");
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", function (e) {
    // console.log("here");
    if (e.target.innerHTML == "=") {
      s = eval(s);
      document.querySelector(".input").value = s;
    } else {
      console.log(e.target);
      s = s + e.target.innerHTML;
      console.log(s);
      document.querySelector(".input").value = s;
    }
  });
});
console.log(addhere);
