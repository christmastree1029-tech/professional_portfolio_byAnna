// script.js

// Smooth navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element);
});

// Form handling
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log('Form Data Submitted:', Object.fromEntries(formData));
    form.reset(); // Reset form
});

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);
scrollToTopBtn.addEventListener('click', () => {
    smoothScroll('body');
});

// Parallax effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.parallax').style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Typing animation
const textToType = 'Welcome to my professional portfolio!';
const typingSpeed = 100;
let index = 0;

const typeText = () => {
    if (index < textToType.length) {
        document.querySelector('.typing-animation').textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
};
typeText();

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 't') {
        smoothScroll('#top');
    }
});
