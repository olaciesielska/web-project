(() => {
  const inputFields = document.querySelectorAll(".productsSlider__input");

  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", (event) => {
      let value = parseFloat(event.target.value);
      event.target.value = value && Math.abs(value) >= 0 ? Math.abs(value) : null;
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
