const queBtns = document.querySelectorAll(".que-btn");

queBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const answer = this.nextElementSibling;
    const plusIcon = this.querySelector(".icon-plus");
    const minusIcon = this.querySelector(".icon-minus");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
