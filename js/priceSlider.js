(() => {
  const fromSlider = document.querySelector(".fromSlider");
  const toSlider = document.querySelector(".toSlider");

  function changeRangeColor() {
    const rangeTrack = `
      linear-gradient(#f74137, #f74137)
      no-repeat center/ calc(${toSlider.value - fromSlider.value}% - 5px) 100%`;

    toSlider.style.background = rangeTrack;
  }

  fromSlider.addEventListener("input", changeRangeColor);
  toSlider.addEventListener("input", changeRangeColor);

  changeRangeColor();
})();
