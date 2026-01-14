/**
 * Binxin Gao - Personal Website
 * Main JavaScript
 */

// ========================================
// Navigation
// ========================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active link highlighting based on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            correspondingLink?.classList.add('active');
        }
    });
}

// Hide/show navigation on scroll
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
    const currentScrollY = window.scrollY;

    // Only hide nav after scrolling past hero
    if (currentScrollY > window.innerHeight * 0.5) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.classList.add('nav--hidden');
        } else {
            nav.classList.remove('nav--hidden');
        }
    } else {
        nav.classList.remove('nav--hidden');
    }

    lastScrollY = currentScrollY;
    highlightNavLink();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
    }
});

// ========================================
// Scroll-triggered Fade In Animations
// ========================================

const fadeElements = document.querySelectorAll('.section__header, .project-card, .publication, .education-card, .timeline__item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// ========================================
// Smooth Scroll Enhancement
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Hero Section Animation
// ========================================

// Stagger animation for hero elements
const heroElements = document.querySelectorAll('.hero__name, .hero__tagline, .hero__subtitle, .hero__cta');

heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;

    // Trigger animation after a short delay
    setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 100);
});

// ========================================
// Timeline Interaction
// ========================================

const timelineItems = document.querySelectorAll('.timeline__item');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        timelineItems.forEach(i => i.style.opacity = '0.5');
        item.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        timelineItems.forEach(i => i.style.opacity = '1');
    });
});

// ========================================
// Project Card Hover Effect
// ========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ========================================
// Email Copy to Clipboard
// ========================================

const emailLink = document.querySelector('.contact__email');

emailLink?.addEventListener('click', async function (e) {
    e.preventDefault();
    const email = this.textContent;

    try {
        await navigator.clipboard.writeText(email);

        // Visual feedback
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.style.color = 'var(--accent-gold)';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.color = '';
        }, 2000);
    } catch (err) {
        // Fallback: open email client
        window.location.href = `mailto:${email}`;
    }
});

// ========================================
// Keyboard Navigation
// ========================================

document.addEventListener('keydown', (e) => {
    // ESC closes mobile menu
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// Performance: Reduce motion for users who prefer it
// ========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');

    // Disable scroll animations
    fadeElements.forEach(el => {
        el.classList.remove('fade-in');
        el.classList.add('visible');
    });
}

// ========================================
// Console Easter Egg
// ========================================

console.log(`
%c👋 Hello, curious one!

%cBuilt with care by Binxin Gao.
Pursuing net positive impact, driven by curiosity.

%cLet's connect: binxingao@gmail.com
`,
    'font-size: 18px; font-weight: bold;',
    'font-size: 12px; color: #6B6560;',
    'font-size: 12px; color: #C4785A;'
);
