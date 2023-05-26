(() => {
  const right_arrow = document.querySelector(".productsSlider_rightArrow");
  const left_arrow = document.querySelector(".productsSlider_leftArrow");
  const productContainer = document.querySelectorAll(".productsSlider__slider");
  const productItem = document.querySelector(".productsSlider__item");
  let productItemRect = getProductItemRect();

  function getProductItemRect() {
    return productItem.getBoundingClientRect().width;
  }

  window.addEventListener("resize", () => {
    productItemRect = getProductItemRect();
  });

  right_arrow.style.backgroundColor = "rgba(17, 17, 17, 0.5)";

  productContainer.forEach((item) => {
    let maxScrollLeft = item.scrollWidth - item.clientWidth;

    window.addEventListener("resize", () => {
      maxScrollLeft = item.scrollWidth - item.clientWidth;
    });

    right_arrow.addEventListener("click", () => {
      item.scrollLeft += productItemRect + 20;
      left_arrow.style.backgroundColor = "rgba(17, 17, 17, 0.5)";

      if (item.scrollLeft + 25 >= parseInt(maxScrollLeft - productItemRect)) {
        right_arrow.style.backgroundColor = "lightgray";
      }
    });
    if (item.scrollLeft >= maxScrollLeft) {
      right_arrow.style.backgroundColor = "lightgray";
    }

    left_arrow.addEventListener("click", () => {
      item.scrollLeft -= productItemRect + 20;
      right_arrow.style.backgroundColor = "rgba(17, 17, 17, 0.5)";

      if (item.scrollLeft <= parseInt(productItemRect + 25)) {
        left_arrow.style.backgroundColor = "lightgray";
      }
    });

    if (item.scrollLeft == 0) {
      left_arrow.style.backgroundColor = "lightgray";
    }
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

(() => {
  const inputFields = document.querySelectorAll(".productsSlider__input");

  inputFields.forEach(function (inputField) {
    inputField.addEventListener("input", function () {
      let value = parseFloat(this.value);
      this.value = value && Math.abs(value) >= 0 ? Math.abs(value) : null;
    });
  });
})();
