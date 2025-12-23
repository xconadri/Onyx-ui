// --------------------
// Swipe gestures
// --------------------
let startY = 0;
let endY = 0;

document.addEventListener("touchstart", e => { startY = e.touches[0].clientY; });
document.addEventListener("touchend", e => { endY = e.changedTouches[0].clientY; handleSwipe(); });
function handleSwipe() { 
  if (startY - endY > 80) closeControlCenter();
  if (endY - startY > 80) openControlCenter();
}

// --------------------
// Control Center
// --------------------
const cc = document.getElementById("cc");
function openControlCenter(){ cc.classList.add("show"); }
function closeControlCenter(){ cc.classList.remove("show"); }

// --------------------
// App Opening
// --------------------
const app = document.getElementById("app");
function openApp(){ app.classList.add("show"); }
function closeApp(){ app.classList.remove("show"); }

// --------------------
// Animation Speed
// --------------------
function setSpeed(speed){
  document.documentElement.style.setProperty("--speed", speed);
}
