// Scroll doux pour les liens internes
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Animation fade-in sur les sections au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('main section').forEach(section => {
  section.classList.add('fade-init');
  observer.observe(section);
});

// Animation fade-in au scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-init');
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Préparation dark mode (toggle à ajouter dans le futur)
// function toggleDarkMode() {
//   document.body.classList.toggle('dark');
// } 