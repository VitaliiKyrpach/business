(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.modal'),
    closeModalBtn: document.querySelector("[data-type='modalClose']"),
    modal: document.querySelector("[data-type='modal']"),
  };
  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", openModal);
  });

  // refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal(e) {
    console.dir(e.target.dataset.type)
    const type = e.target.dataset.type
    document.addEventListener("keydown", handleEscape);
    refs.modal.innerHTML = "";
    refs.modal.insertAdjacentHTML("beforeend", createOrderMarkUp(type));
    refs.modal.classList.toggle("pointer-events-none");
    refs.modal.classList.toggle("invisible");
    refs.modal.classList.toggle("opacity-0");
    refs.modal.classList.toggle("opacity-100");
    document.body.classList.toggle("overflow-hidden");
    refs.modal.addEventListener("click", handleCloseModal);
  }

  const createOrderMarkUp = (type) => {
	return `<div class="absolute w-[85vw] min-h-[250px] max-w-[408px] max-h-[95vh] bg-colorSec top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-100 pt-[72px] px-[16px] pb-[24px] rounded-[4px]">
            <button class="absolute top-[24px] right-[24px] w-[24px] h-[24px] bg-button rounded-full flex justify-center items-center border border-btnBorder hover:bg-colorAct transition-colors group" data-type='modalClose' type="button">
              <svg class="pointer-events-none group-hover:scale-[1.5] transition-transform" width="8" height="8">
                <use href="./img/sprite.svg#icon-close"></use>
              </svg>
            </button> 
            <h2 class='text-center'>This ${type} modal is under development</h2>
          </div>  
        `}

  function handleEscape(e) {
    if (e.key == "Escape") {
      closeModal();
    }
  };

  function closeModal() {
    refs.modal.innerHTML = "";
    refs.modal.classList.toggle("pointer-events-none");
    refs.modal.classList.toggle("invisible");
    refs.modal.classList.toggle("opacity-0");
    refs.modal.classList.toggle("opacity-100");
    document.body.classList.toggle("overflow-hidden");
    document.removeEventListener("keydown", handleEscape);
  };
  
  function handleCloseModal(e) {
    if (
      e.target.dataset.type == "modalClose" ||
      e.target.dataset.type == "modal"
    ) {
      closeModal();
    }
  };
})();
