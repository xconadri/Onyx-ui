let startY = 0;
let endY = 0;

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  endY = e.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  if (startY - endY > 80) {
    closeControlCenter();
  }
  if (endY - startY > 80) {
    openControlCenter();
  }
}
