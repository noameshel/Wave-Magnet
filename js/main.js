document.addEventListener('DOMContentLoaded', () => {
    // תפריט המבורגר למובייל
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // אנימציית הופעה לכרטיסי התכונות
    const features = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    features.forEach(feature => observer.observe(feature));
}); 