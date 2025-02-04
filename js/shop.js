document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('orderModal');
    const closeModal = document.querySelector('.close-modal');
    const orderForm = document.getElementById('orderForm');
    const orderBtns = document.querySelectorAll('.order-btn');
    
    let selectedPackage = '';

    // פתיחת המודל בלחיצה על כפתור הזמנה
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedPackage = btn.dataset.package;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // מניעת גלילה ברקע
        });
    });

    // סגירת המודל
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // סגירת המודל בלחיצה מחוץ לתוכן
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // טיפול בשליחת הטופס
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            package: selectedPackage,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            eventDate: document.getElementById('eventDate').value,
            eventType: document.getElementById('eventType').value,
            notes: document.getElementById('notes').value
        };

        try {
            // כאן בפרויקט אמיתי היינו שולחים את הנתונים לשרת
            console.log('Sending order:', formData);
            
            // סימולציה של שליחה לשרת
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            alert('ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            orderForm.reset();
            
        } catch (error) {
            alert('אירעה שגיאה בשליחת ההזמנה. אנא נסו שוב מאוחר יותר.');
        }
    });

    // וולידציה בסיסית לטלפון
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // הגבלת תאריך האירוע לעתיד בלבד
    const eventDateInput = document.getElementById('eventDate');
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.min = today;
}); 