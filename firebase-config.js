// Firebase Web initialization (compat SDK for simplicity)
// Make sure to include firebase-app-compat.js and firebase-auth-compat.js before this file
(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyCt9kJNQbUsuBLNY5ssGp0xjXcevt19Jdk",
        authDomain: "bobikfas.firebaseapp.com",
        projectId: "bobikfas",
        storageBucket: "bobikfas.firebasestorage.app",
        messagingSenderId: "540888123854",
        appId: "1:540888123854:web:9b78fc17763055d451039f",
        measurementId: "G-5WLX840DVY"
    };
    if (window.firebase && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
})();


