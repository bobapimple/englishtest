// Firebase Auth-based login/register
(function() {
    const messageEl = document.getElementById('message');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    function showMessage(text, type) {
        messageEl.textContent = text;
        messageEl.className = 'message ' + (type === 'error' ? 'error' : 'success');
        messageEl.style.display = 'block';
    }

    // Redirect if already logged in (Firebase)
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = '../index.html';
        }
    });

    // Register
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim().toLowerCase();
        const password = document.getElementById('register-password').value;

        if (!name || !email || !password) {
            showMessage('Please fill all fields', 'error');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => user.updateProfile({ displayName: name }))
            .then(() => { window.location.href = '../index.html'; })
            .catch(err => showMessage(err.message, 'error'));
    });

    // Login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { window.location.href = '../index.html'; })
            .catch(err => showMessage(err.message, 'error'));
    });
})();


