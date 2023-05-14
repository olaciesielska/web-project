let slide_index = 1;
let left_arrow = document.querySelector(".left");
let right_arrow = document.querySelector(".right");

function nextSlide(n) {
  displaySlides((slide_index += n));
}

function displaySlides(n) {
  let i;
  let slides = document.querySelectorAll(".slider__element");

  if (n > slides.length) {
    slide_index = 1;
  }

  if (n < 1) {
    slide_index = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide_index - 1].style.display = "block";
}

displaySlides(slide_index);


left_arrow.addEventListener("click", () => {
  nextSlide(-1);
});

right_arrow.addEventListener("click", () => {
  nextSlide(1);
});