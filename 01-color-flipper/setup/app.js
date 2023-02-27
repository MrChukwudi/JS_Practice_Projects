const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let color = document.querySelector(".color");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let getRandom = randNumber();
  document.body.style.backgroundColor = colors[getRandom];
  color.textContent = colors[getRandom];
});

function randNumber() {
  return Math.floor(Math.random() * colors.length);
}
