(() => {
  const slides = document.querySelectorAll(".slider__element");
  let slide_index = 1;

  const left_arrow = document.querySelector(".left");
  const right_arrow = document.querySelector(".right");

  function nextSlide(n) {
    displaySlides((slide_index += n));
  }

  function displaySlides(n) {
    let i;

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
})();

(() => {
  const minus_buttons = document.querySelectorAll(".productsSlider__input--minus");
  const plus_buttons = document.querySelectorAll(".productsSlider__input--plus");
  const input_fields = document.querySelectorAll(".productsSlider__input");

  input_fields.forEach((input_field, index) => {
    let currentValue = parseInt(input_field.value);

    function changeValue(n) {
      currentValue += n;

      if (currentValue < 1) {
        currentValue = 1;
      }

      input_field.value = currentValue;
    }

    minus_buttons[index].addEventListener("click", () => {
      changeValue(-1);
    });

    plus_buttons[index].addEventListener("click", () => {
      changeValue(1);
    });
  });
})();

/* let right_arrow = document.querySelector(".productsSlider_rightArrow");
let slides = document.querySelector(".productsSlider__slider");
right_arrow.addEventListener("click", function () {
  slides.style.gridTemplateAreas = '"b c d e"';
}); */
