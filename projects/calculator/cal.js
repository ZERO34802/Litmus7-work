let s = "";
let buttons = document.querySelectorAll(".containter-items");
// console.log("here");
// console.log(buttons);
// console.log(buttons);
let arr = Array.from(buttons);
// console.log(arr);
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
