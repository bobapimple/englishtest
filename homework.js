// Флаг для отслеживания состояния отображения ответов
let answersVisible = false;

// Функция для переключения видимости ответов
function toggleAnswers() {
    const answers = document.querySelectorAll('.answer');
    const showAnswersBtn = document.getElementById('show-answers-btn');
    
    answersVisible = !answersVisible;
    
    answers.forEach(answer => {
        if (answersVisible) {
            answer.classList.remove('hidden');
        } else {
            answer.classList.add('hidden');
        }
    });
    
    // Обновляем текст кнопки
    showAnswersBtn.textContent = answersVisible ? '🙈 Hide Answers' : '👁️ Show Answers';
}

// Добавляем обработчик события для кнопки "Show Answers"
document.addEventListener('DOMContentLoaded', function() {
    const showAnswersBtn = document.getElementById('show-answers-btn');
    const backBtn = document.getElementById('back-btn');
    
    if (showAnswersBtn) {
        showAnswersBtn.addEventListener('click', toggleAnswers);
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Перенаправляем на главную страницу
            window.location.href = 'index.html';
        });
    }
});

// Функция для переключения темы (если нужно)
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        // Сохраняем выбор темы в localStorage (если нужно)
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        // Сохраняем выбор темы в localStorage (если нужно)
        localStorage.setItem('theme', 'dark');
    }
}

// Загружаем сохраненную тему при загрузке страницы (если нужно)
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
});