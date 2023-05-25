(() => {
  const menu_elements = document.querySelector(".menu__bottom-wrapper");
  const menu_burger = document.querySelector(".menu__item--burger");

  function showMenu() {
    if (menu_elements.style.display === "block") {
      menu_elements.style.display = "none";
    } else {
      menu_elements.style.display = "block";
    }
  }

  menu_burger.addEventListener("click", showMenu);
})();
