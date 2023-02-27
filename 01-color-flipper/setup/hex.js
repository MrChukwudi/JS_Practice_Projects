const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let myBody = document.querySelector("body");
let mySpan = document.querySelector(".color");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
    myBody.style.backgroundColor = hexColor;
    mySpan.style.backgroundColor = hexColor;
    mySpan.textContent = hexColor;
  }
});
