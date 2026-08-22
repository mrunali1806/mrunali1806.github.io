// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  progressBar.style.width = pct + '%';
});

// Highlight active sidebar item + tab on scroll
const sections = document.querySelectorAll('.section');
const fileItems = document.querySelectorAll('.file-item');
const tabs = document.querySelectorAll('.tab');
window.addEventListener('scroll', () => {
  let current = sections[0].id;
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  fileItems.forEach((item, i) => item.classList.toggle('active', sections[i].id === current));
  tabs.forEach((tab, i) => tab.classList.toggle('active', sections[i] && sections[i].id === current));
});

// Typing effect on hero role line
const roleText = "Aspiring Software Engineer · Frontend & QA";
const typedEl = document.getElementById('typedRole');
let ti = 0;
function typeChar() {
  if (ti <= roleText.length) {
    typedEl.textContent = roleText.slice(0, ti);
    ti++;
    setTimeout(typeChar, 45);
  } else {
    typedEl.style.borderRight = "none";
  }
}
typeChar();

// Rotating typewriter tagline near photo
const taglines = ["Fast learner", "Detail-oriented", "Problem solver", "Team player"];
const tagEl = document.getElementById('taglineRotate');
let tIdx = 0, cIdx = 0, deleting = false;
function rotateTag() {
  const current = taglines[tIdx];
  if (!deleting) {
    cIdx++;
    tagEl.textContent = current.slice(0, cIdx);
    if (cIdx === current.length) {
      deleting = true;
      setTimeout(rotateTag, 1400);
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
  setTimeout(rotateTag, deleting ? 35 : 65);
}
setTimeout(rotateTag, 1800);

// Fade-in sections on scroll
const fadeEls = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => observer.observe(el));