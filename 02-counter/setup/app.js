let counter = document.querySelector("#value");
let button = document.querySelectorAll(".btn");
let count = 0;
let colorRed = "red";
let colorGreen = "green";
let colorBlack = "black";

button.forEach(function (aButton) {
  aButton.addEventListener("click", function () {
    if (aButton.classList.contains("increase")) {
      count++;
    } else if (aButton.classList.contains("decrease")) {
      count--;
    } else if (aButton.classList.contains("reset")) {
      count = 0;
    }

    counter.textContent = count;

    if (count > 0) {
      counter.style.color = `${colorGreen}`;
    } else if (count < 0) {
      counter.style.color = `${colorRed}`;
    } else {
      counter.style.color = `${colorBlack}`;
    }
  });
});
