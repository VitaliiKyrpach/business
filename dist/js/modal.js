(() => {
  const refs = {
    // openModalBtn: document.querySelectorAll("[data-modal-open]"),
    openModalBtn: document.querySelectorAll('[data-type="register"]'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleModal);
  });

  // refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    console.log('open modal')
    // refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
