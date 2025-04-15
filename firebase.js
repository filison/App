// Firebase konfigurace
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
}

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
}
