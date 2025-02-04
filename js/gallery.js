document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const modalCaption = document.querySelector('.modal-caption');
    const closeModal = document.querySelector('.close-modal');

    // פילטור תמונות
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // הסרת הclass active מכל הכפתורים
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // פתיחת תמונה בגדול
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;
            const desc = item.querySelector('p').textContent;

            modalImg.src = img.src;
            modalCaption.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // סגירת המודל
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 