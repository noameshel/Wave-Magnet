document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const loadingSpinner = submitBtn.querySelector('.loading-spinner');
    const btnText = submitBtn.querySelector('.btn-text');

    // וולידציה בסיסית לטלפון
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // איסוף הנתונים מהטופס
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // מצב טעינה
        submitBtn.disabled = true;
        loadingSpinner.style.display = 'block';
        btnText.textContent = 'שולח...';

        try {
            // כאן בפרויקט אמיתי היינו שולחים את הנתונים לשרת
            console.log('Sending message:', formData);
            
            // סימולציה של שליחה לשרת
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // הודעת הצלחה
            alert('ההודעה נשלחה בהצלחה! נחזור אליך בהקדם');
            contactForm.reset();
            
        } catch (error) {
            alert('אירעה שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר.');
        } finally {
            submitBtn.disabled = false;
            loadingSpinner.style.display = 'none';
            btnText.textContent = 'שלח/י הודעה';
        }
    });

    // אנימציית הופעה לכרטיסי המידע
    const infoCards = document.querySelectorAll('.info-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}); 