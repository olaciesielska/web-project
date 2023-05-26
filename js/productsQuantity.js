(() => {
  const inputFields = document.querySelectorAll(".productsSlider__input");

  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", (event) => {
      let value = parseFloat(event.target.value);
      event.target.value = value && Math.abs(value) >= 0 ? Math.abs(value) : null;
    });
  });
})();
