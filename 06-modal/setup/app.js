// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

let openModalBtn = document.querySelector(".modal-btn");
let modalCloseBtn = document.querySelector(".close-btn");
let myModal = document.querySelector(".modal-overlay");

openModalBtn.addEventListener("click", function () {
  myModal.classList.add("open-modal");
});

modalCloseBtn.addEventListener("click", function () {
  myModal.classList.remove("open-modal");
});
