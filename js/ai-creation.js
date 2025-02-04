document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.querySelector('#promptInput');
    const generateBtn = document.querySelector('#generateBtn');
    const resultImage = document.querySelector('#resultImage');
    const resultContainer = document.querySelector('#resultContainer');
    const actionButtons = document.querySelector('.action-buttons');
    const styleButtons = document.querySelectorAll('.style-btn');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const btnText = document.querySelector('.btn-text');

    let selectedStyle = 'realistic';

    // טיפול בכפתורי הסגנון
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedStyle = btn.dataset.style;
        });
    });

    // פונקציה דמה ליצירת תמונה
    const generateImage = async (prompt, style) => {
        // בפרויקט אמיתי, כאן היינו שולחים בקשה ל-API כמו OpenAI או Stable Diffusion
        return new Promise((resolve) => {
            setTimeout(() => {
                // כרגע נחזיר URL של תמונה דמה
                resolve(`https://source.unsplash.com/random/800x800/?${prompt.split(' ').join(',')}`);
            }, 2000);
        });
    };

    generateBtn.addEventListener('click', async () => {
        if (!promptInput.value.trim()) {
            alert('אנא הכניסו תיאור לתמונה הרצויה');
            return;
        }

        // מצב טעינה
        generateBtn.disabled = true;
        loadingSpinner.style.display = 'block';
        btnText.textContent = 'יוצר...';

        try {
            const imageUrl = await generateImage(promptInput.value, selectedStyle);
            
            resultImage.src = imageUrl;
            resultImage.onload = () => {
                resultImage.style.display = 'block';
                document.querySelector('.placeholder-text').style.display = 'none';
                actionButtons.style.display = 'flex';
            };
        } catch (error) {
            alert('אירעה שגיאה ביצירת התמונה. אנא נסו שוב.');
        } finally {
            generateBtn.disabled = false;
            loadingSpinner.style.display = 'none';
            btnText.textContent = 'צור תמונה';
        }
    });

    // כפתורי הפעולה
    document.querySelector('#regenerateBtn').addEventListener('click', () => {
        generateBtn.click();
    });

    document.querySelector('#saveBtn').addEventListener('click', () => {
        // כאן אפשר להוסיף לוגיקה לשמירת התמונה או מעבר לדף ההזמנה
        window.location.href = 'shop.html?image=' + encodeURIComponent(resultImage.src);
    });

    // טעינת דוגמאות
    const loadExamples = () => {
        const examplesGrid = document.querySelector('.examples-grid');
        const examples = [
            { prompt: 'חתונה על חוף הים', style: 'realistic' },
            { prompt: 'מסיבת יום הולדת', style: 'cartoon' },
            { prompt: 'אירוע חברה', style: 'artistic' }
        ];

        examples.forEach(example => {
            const exampleEl = document.createElement('div');
            exampleEl.className = 'example-item';
            exampleEl.innerHTML = `
                <img src="https://source.unsplash.com/random/300x300/?${example.prompt.split(' ').join(',')}" alt="${example.prompt}">
                <div class="example-info">
                    <h4>${example.prompt}</h4>
                    <span class="style-tag">${example.style}</span>
                </div>
            `;
            examplesGrid.appendChild(exampleEl);
        });
    };

    loadExamples();
}); 