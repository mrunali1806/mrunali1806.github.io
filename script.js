// Typing effect for hero tagline
const taglines = [
  "if it can break, I'll find how.",
  "documenting bugs before they reach production.",
  "test cases, not guesswork."
];
const tagEl = document.getElementById('typedTagline');
let tIdx = 0, cIdx = 0, deleting = false;

function typeTagline() {
  const current = taglines[tIdx];
  if (!deleting) {
    cIdx++;
    tagEl.textContent = current.slice(0, cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(typeTagline, 1600);
      return;
    }
  } else {
    cIdx--;
    tagEl.textContent = current.slice(0, cIdx);
    if (cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % taglines.length;
    }
  }
  setTimeout(typeTagline, deleting ? 30 : 55);
}
setTimeout(typeTagline, 500);

// Scroll fade-in for sections
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));
