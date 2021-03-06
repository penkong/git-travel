import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal")
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }
  events() {
    //clicking open
    this.openModalButton.click(this.openModal.bind(this));
    //clicking close
    this.closeModalButton.click(this.closeModal.bind(this));
    //pushes the escape key any
    $(document).keyup(this.keyPressHandler.bind(this)); //keyup is let's go of key

  }
  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false; //prevent default to go top #
  }
  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}


export default Modal;