(() => {
  const menuBtnRef = document.querySelector("[menu-btn-open]");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
  });
})();
