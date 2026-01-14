import { animate, inView, scroll } from '@motionone/dom';

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Hero animations
  document.addEventListener('DOMContentLoaded', () => {
    // Animate hero heading
    const heroHeading = document.querySelector('.hero-animate');
    if (heroHeading) {
      animate(
        heroHeading,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
        { duration: 0.8, easing: 'ease-out' }
      );
    }

    // Animate hero subheading
    const heroSubheading = document.querySelector('.hero-sub-animate');
    if (heroSubheading) {
      animate(
        heroSubheading,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.8, delay: 0.2, easing: 'ease-out' }
      );
    }

    // Animate CTA button
    const heroCta = document.querySelector('.hero-cta-animate');
    if (heroCta) {
      animate(
        heroCta,
        { opacity: [0, 1], transform: ['scale(0.95)', 'scale(1)'] },
        { duration: 0.6, delay: 0.4, easing: 'ease-out' }
      );
    }
  });

  // Scroll animations for sections
  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach((section) => {
    inView(section, () => {
      animate(
        section,
        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },
        { duration: 0.8, easing: 'ease-out' }
      );
    }, { margin: '-100px' });
  });

  // Staggered animations for cards
  const cardContainers = document.querySelectorAll('.stagger-cards');
  cardContainers.forEach((container) => {
    inView(container, () => {
      const cards = container.querySelectorAll('.card');
      animate(
        cards,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0)'] },
        { duration: 0.6, delay: (i) => i * 0.1, easing: 'ease-out' }
      );
    }, { margin: '-50px' });
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    scroll(({ y }) => {
      if (y.current > 50) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      } else {
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      }
    });
  }

  // Parallax effect for decorative elements
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach((element) => {
    scroll(animate(element, { transform: ['translateY(0)', 'translateY(-100px)'] }), {
      target: element,
      offset: ['start end', 'end start']
    });
  });
}