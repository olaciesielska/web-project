(() => {
  const arrows = document.querySelectorAll(".footer__arrow");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      arrow.classList.toggle("rotate");
      const parentItem = arrow.parentNode;
      const siblings = Array.from(parentItem.parentNode.children);

      siblings.forEach((sibling) => {
        if (sibling !== parentItem) {
          sibling.classList.toggle("visible");
        }
      });
    });
  });
})();
