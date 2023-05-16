let slide_index = 1;
let left_arrow = document.querySelector(".left");
let right_arrow = document.querySelector(".right");

let minus_buttons = document.querySelectorAll(".productsSlider__input--minus");
let plus_buttons = document.querySelectorAll(".productsSlider__input--plus");
let input_fields = document.querySelectorAll(".productsSlider__input");

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

input_fields.forEach((input_field, index) => {
  let currentValue = parseInt(input_field.value);

  function changeValue(n) {
    currentValue += n;
    input_field.value = currentValue;
  }

  minus_buttons[index].addEventListener("click", () => {
    changeValue(-1);
  });

  plus_buttons[index].addEventListener("click", () => {
    changeValue(1);
  });
});
