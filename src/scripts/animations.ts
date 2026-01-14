// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate-in');
      }, index * 100);
    }
  });
}, { threshold: 0.1 });

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});