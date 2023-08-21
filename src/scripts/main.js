/* eslint-disable max-len */
'use strict';

const container = document.getElementById('scrollable-container');
let isMouseDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (event) => {
  isMouseDown = true;
  startX = event.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

container.addEventListener('mouseup', () => {
  isMouseDown = false;
});

container.addEventListener('mousemove', (event) => {
  if (!isMouseDown) {
    return;
  }
  event.preventDefault();

  const x = event.pageX - container.offsetLeft;
  const walk = (x - startX);

  container.scrollLeft = scrollLeft - walk;
});

const questionItems = document.querySelectorAll('.questions__item');

questionItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('questions__item--active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.querySelector('.subscription__input');
  const form = document.querySelector('.subscription__email');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailInput.value = '';
  });
});
