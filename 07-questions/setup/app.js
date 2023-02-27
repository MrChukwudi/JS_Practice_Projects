//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (anyBtn) {
  let btn = anyBtn.querySelector(".question-btn");
  //   To handle the functionality that closes other artices when we click on a new qna:
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== anyBtn) {
        item.classList.remove("show-text");
      }
    });
  });

  btn.addEventListener("click", function () {
    anyBtn.classList.toggle("show-text");
  });
});

// traversing the dom
/*const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (anyBtn) {
  anyBtn.addEventListener("click", function (e) {
    const toShowQuestion = e.currentTarget.parentElement.parentElement;
    toShowQuestion.classList.toggle("show-text");
  });
});
*/
