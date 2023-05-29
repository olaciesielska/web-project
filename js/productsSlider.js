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
