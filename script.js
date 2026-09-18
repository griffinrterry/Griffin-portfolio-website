// Theme toggle. Three states: no stored value means the OS decides; an explicit
// choice is remembered. Storage can throw (private mode), so every access is guarded.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.themetoggle');
  if (!btn) return;

  var mql = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    var set = root.getAttribute('data-theme');
    if (set === 'dark' || set === 'light') return set;
    return mql.matches ? 'dark' : 'light';
  }

  function label() {
    var next = current() === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    label();
  });

  // Follow the OS while the visitor has not made an explicit choice.
  var onSystemChange = function () {
    if (!root.getAttribute('data-theme')) label();
  };
  if (mql.addEventListener) mql.addEventListener('change', onSystemChange);
  else if (mql.addListener) mql.addListener(onSystemChange);

  label();
})();

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
