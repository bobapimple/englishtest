// Функция для проверки ответов в упражнении
function checkExerciseAnswers(exerciseElement) {
    const questionItems = exerciseElement.querySelectorAll('.question-item');
    let totalInputs = 0;
    let correctInputs = 0;
    
    questionItems.forEach(item => {
        const inputs = item.querySelectorAll('.answer-input');
        const resultContainer = item.querySelector('.result-container');
        
        // Очищаем предыдущие результаты
        resultContainer.innerHTML = '';
        
        inputs.forEach(input => {
            totalInputs++;
            const userAnswer = input.value.trim();
            const correctAnswer = input.dataset.correct;
            
            // Проверяем ответ
            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                // Правильный ответ - показываем галочку
                const correctIcon = document.createElement('span');
                correctIcon.className = 'result-icon correct';
                correctIcon.textContent = '✓';
                resultContainer.appendChild(correctIcon);
                correctInputs++;
            } else {
                // Неправильный ответ - показываем крестик и правильный ответ
                const incorrectIcon = document.createElement('span');
                incorrectIcon.className = 'result-icon incorrect';
                incorrectIcon.textContent = '✗';
                resultContainer.appendChild(incorrectIcon);
                
                // Создаем элемент для отображения правильного ответа
                const correctAnswerSpan = document.createElement('span');
                correctAnswerSpan.className = 'correct-answer';
                correctAnswerSpan.textContent = ` (Правильный ответ: ${correctAnswer})`;
                resultContainer.appendChild(correctAnswerSpan);
            }
        });
    });
    
    // Показываем общий результат для упражнения
    alert(`Вы набрали ${correctInputs} из ${totalInputs} правильных ответов!`);
    try {
        // Save per-exercise result if user is logged in
        if (window.firebase && firebase.auth && firebase.firestore) {
            const user = firebase.auth().currentUser;
            if (user) {
                const db = firebase.firestore();
                const payload = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName || null,
                    exerciseTitle: exerciseElement.querySelector('.exercise-title span')?.textContent || 'Exercise',
                    correct: correctInputs,
                    total: totalInputs,
                    topic: 'home-and-away',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                db.collection('homeworkSubmissions').add(payload).catch(() => {});
            }
        }
    } catch(e) {}
}

// Добавляем обработчики событий для кнопок проверки
document.addEventListener('DOMContentLoaded', function() {
    // Назначаем обработчики для всех кнопок проверки
    const checkButtons = document.querySelectorAll('.check-btn');
    checkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exerciseElement = this.closest('.exercise');
            checkExerciseAnswers(exerciseElement);
        });
    });
    
    // Назначаем обработчик для кнопки "Back to Tests"
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

// Функция для переключения темы (если нужно)
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Загружаем сохраненную тему при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
});