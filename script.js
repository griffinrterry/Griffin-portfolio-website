// Masthead menu (new system) + legacy nav toggle, while case studies migrate.
const newToggle = document.querySelector('.navtoggle');
const newNav = document.querySelector('.masthead nav');
if (newToggle && newNav) {
  newToggle.addEventListener('click', () => {
    const open = newNav.classList.toggle('open');
    newToggle.setAttribute('aria-expanded', String(open));
  });
  newNav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      newNav.classList.remove('open');
      newToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

const oldToggle = document.querySelector('.nav__toggle');
const oldLinks = document.querySelector('.nav__links');
if (oldToggle && oldLinks) {
  oldToggle.addEventListener('click', () => oldLinks.classList.toggle('open'));
  oldLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => oldLinks.classList.remove('open')));
}

// Legacy scroll reveal — only on pages that still use it.
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
}

// Legacy cursor glow on old project cards.
document.querySelectorAll('.pcard').forEach((card) => {
  card.addEventListener('mousemove', (ev) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${ev.clientX - r.left}px`);
    card.style.setProperty('--my', `${ev.clientY - r.top}px`);
  });
});
