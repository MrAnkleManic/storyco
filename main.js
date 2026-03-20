// ─── Mobile nav toggle ───
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close nav when a link is tapped
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ─── Scroll fade-in ───
const faders = document.querySelectorAll('.fade-in');

if (faders.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(el => observer.observe(el));
} else {
  // Fallback: show everything
  faders.forEach(el => el.classList.add('visible'));
}
