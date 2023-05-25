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

  productContainer.forEach((item) => {
    right_arrow.addEventListener("click", () => {
      item.scrollLeft += productItemRect + 20;
    });

    left_arrow.addEventListener("click", () => {
      item.scrollLeft -= productItemRect + 20;
    });
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
