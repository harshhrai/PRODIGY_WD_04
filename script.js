// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation to sections
const sections = document.querySelectorAll('section');

const fadeInOptions = {
    threshold: 0.5
};

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, fadeInOptions);

sections.forEach(section => {
    fadeInObserver.observe(section);
});

// Initialize Typed.js for the text slider
var typed = new Typed('#text-slider', {
    strings: document.getElementById('keywords').textContent.split(','),
    typeSpeed: 60,
    backSpeed: 40,
    startDelay: 1000,
    backDelay: 1500,
    loop: true
});
