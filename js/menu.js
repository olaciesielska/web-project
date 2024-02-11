(() => {
  const menu_elements = document.querySelector(".menu__bottom-wrapper");
  const menu_burger = document.querySelector(".menu__item--burger");
  const main_wrapper = document.querySelector(".main__wrapper")

  function showMenu() {
    if (menu_elements.style.display === "block" && main_wrapper.style.opacity === "1") {
      menu_elements.style.display = "none";
      main_wrapper.style.opacity === "0.4";

    } else {
      menu_elements.classList.toggle("visible");
      main_wrapper.classList.toggle("opacity");
    }
  }

  menu_burger.addEventListener("click", showMenu);
})();
