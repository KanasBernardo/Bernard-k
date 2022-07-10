import '../css/main.css';

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');

ScrollReveal().reveal('.new-card', { delay: 600 });

ScrollReveal().reveal('.cards-banner-one', { delay: 600 });

ScrollReveal().reveal('.cards-banner-two', { delay: 600 });

ScrollReveal().reveal('.footer', { delay: 600 });

ScrollReveal().reveal('.footer-links', { delay: 600 });

ScrollReveal().reveal('.social', { delay: 600 });