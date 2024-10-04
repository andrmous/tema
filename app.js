// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation trigger for scroll-based content
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -200px 0px"
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});
