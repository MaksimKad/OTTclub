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
