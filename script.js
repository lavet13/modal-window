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
    modal.className = 'modal';
    overlay.className = 'overlay';
    modal.classList.add('modal--open');
    modal.classList.add('fade-in');
    overlay.classList.add('fade-in');
  }
};

const closeModal = function () {
  if (!modal.classList.contains('hidden')) {
    modal.className = 'modal';
    overlay.className = 'overlay';
    modal.classList.add('modal--close');
    modal.classList.add('fade-out');
    overlay.classList.add('fade-out');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
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
