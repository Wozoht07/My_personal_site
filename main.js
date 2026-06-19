const btn     = document.getElementById('menuBtn');
const drawer  = document.getElementById('navDrawer');
const overlay = document.getElementById('navOverlay');

function toggleMenu(open) {
  btn.classList.toggle('open', open);
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
}

btn.addEventListener('click', () => toggleMenu(!drawer.classList.contains('open')));
overlay.addEventListener('click', () => toggleMenu(false));