import { animate, inView, scroll } from '@motionone/dom';

// Fade in animations on scroll
function initScrollAnimations() {
  const elements = document.querySelectorAll<HTMLElement>('.fade-in');
  
  elements.forEach((element, index) => {
    inView(element, () => {
      animate(
        element,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
        { duration: 0.6, delay: index * 0.1 }
      );
    });
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (!navbar) return;
  
  scroll(({ y }) => {
    if (y.current > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Button hover effects
function initButtonEffects() {
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });
}

// Card hover effects
function initCardEffects() {
  const cards = document.querySelectorAll<HTMLElement>('.service-card, .approach-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(
        card,
        { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
        { duration: 0.3 }
      );
    });
    
    card.addEventListener('mouseleave', () => {
      animate(
        card,
        { transform: 'translateY(0px)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
        { duration: 0.3 }
      );
    });
  });
}

// Initialize all animations when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initNavbarScroll();
    initButtonEffects();
    initCardEffects();
  });
} else {
  initScrollAnimations();
  initNavbarScroll();
  initButtonEffects();
  initCardEffects();
}