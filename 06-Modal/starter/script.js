// querySelector() returns the first matching element.
// querySelectorAll() returns a NodeList of all matching elements.

// functionName() -> calls the function immediately.
// functionName -> passes the function reference (used with addEventListener).

// keydown  -> fires when a key is pressed
// keyup    -> fires when a key is released
// keypress -> deprecated (avoid using)

'use strict';

// =====================
// Selecting Elements
// =====================

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtnModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// =====================
// Functions
// =====================

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// =====================
// Event Listeners
// =====================

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

closeBtnModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
