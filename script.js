'use strict';

const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  btnCloseModal = document.querySelector('.close-modal'),
  btnsShowModal = document.querySelectorAll('.show-modal');

// for (let btn of btnsShowModal) {
//   console.log(btn.textContent);
// }

// for (let i = 0; i < btnsShowModal.length; i++) {
//   console.log(btnsShowModal[i].textContent);
// }

const openModal = function () {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modal.classList.add('modal--open');
    modal.classList.add('fade-in');
    overlay.classList.add('fade-in');
    new Promise(resolve =>
      setTimeout(() => {
        modal.classList.remove('modal--open');
        modal.classList.remove('fade-in');
        overlay.classList.remove('fade-in');
      }, 200)
    );
  }
};

const closeModal = function () {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('modal--close');
    modal.classList.add('fade-out');
    overlay.classList.add('fade-out');
    new Promise(resolve =>
      setTimeout(() => {
        modal.classList.remove('modal--close');
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        modal.classList.remove('fade-out');
        overlay.classList.remove('fade-out');
        resolve();
      }, 150)
    );
  }
};

// attach event handler for a lots buttons to open modal window
for (let btn of btnsShowModal) {
  btn.addEventListener('click', openModal);
}

// close modal by clicking on esc button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// close modal by clicking on overlay or X
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// TODO delegation from parent to child
