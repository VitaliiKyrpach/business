(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menuBack: document.querySelector("[data-menu-back]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menuBack.classList.toggle('opacity-100')
    refs.menuBack.classList.toggle('opacity-0')
    refs.menuBack.classList.toggle('pointer-events-none')
    refs.menu.classList.toggle("translate-x-0");
    document.body.classList.toggle("no-scroll");
  }
})();
