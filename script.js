const track = document.querySelector('.slider-track');
const viewport = document.querySelector('.slider-viewport');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
const speed = 1; // Adjust this for auto-scroll speed

// 1. The Animation Loop (Replaces CSS Animation)
function playAnimation() {
  if (!isDragging) {
    currentTranslate -= speed;
    
    // Check if we have scrolled half-way (assuming you duplicated the cards)
    // If we hit the end of the first set, reset to 0 seamlessly
    const trackWidth = track.offsetWidth / 2;
    if (Math.abs(currentTranslate) >= trackWidth) {
      currentTranslate = 0;
    }
    
    setTransform(currentTranslate);
  }
  animationID = requestAnimationFrame(playAnimation);
}

function setTransform(translate) {
  track.style.transform = `translateX(${translate}px)`;
}

// 2. Drag & Touch Events
viewport.addEventListener('mousedown', startDrag);
viewport.addEventListener('mousemove', drag);
viewport.addEventListener('mouseup', endDrag);
viewport.addEventListener('mouseleave', endDrag);

viewport.addEventListener('touchstart', startDrag);
viewport.addEventListener('touchmove', drag);
viewport.addEventListener('touchend', endDrag);

function startDrag(e) {
  isDragging = true;
  startX = getPositionX(e);
  cancelAnimationFrame(animationID); // Stop auto-scroll while dragging
}

function drag(e) {
  if (!isDragging) return;
  const currentX = getPositionX(e);
  const diff = currentX - startX;
  currentTranslate = prevTranslate + diff;
  setTransform(currentTranslate);
}

function endDrag() {
  isDragging = false;
  prevTranslate = currentTranslate;
  playAnimation(); // Restart auto-scroll from the new position
}

function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}
playAnimation();
