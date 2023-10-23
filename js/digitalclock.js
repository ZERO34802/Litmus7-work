function displayTime() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let s = d.getSeconds();
  let amPm = "AM";
  if (hour >= 12) amPm = "PM";
  document.getElementById("hrbx").innerHTML = hour;
  document.getElementById("mnbx").innerHTML = min;
  document.getElementById("sbx").innerHTML = s;
  document.getElementById("ampmbx").innerHTML = amPm;
}
setInterval(displayTime, 1000);
