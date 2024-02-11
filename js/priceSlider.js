(() => {
  const fromSlider = document.querySelector('.fromSlider');
  const toSlider = document.querySelector('.toSlider');
  const fromInput = document.querySelector('.min');
  const toInput = document.querySelector('.max');

  
  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#e1e2e8', '#f74137', toSlider);
    if (from <= to) {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#e1e2e8', '#f74137', toSlider);
    if (from < to) {
      toInput.value = to;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
      ${sliderColor} 100%
    )`;
  }

  fillSlider(fromInput, toInput, '#e1e2e8', '#f74137', toSlider);
  controlFromSlider(fromSlider, toSlider, fromInput);

  fromSlider.addEventListener('input', () => controlFromSlider(fromSlider, toSlider, fromInput));
  toSlider.addEventListener('input', () => controlToSlider(fromSlider, toSlider, toInput));
})();