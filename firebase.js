// Firebase konfigurace
const firebaseConfig = {
  apiKey: "AIzaSyAcg0qqzWJwkxmopkTgzfasMqd3siQNxIU",
  authDomain: "zvladnuto-4e6cb.firebaseapp.com",
  projectId: "zvladnuto-4e6cb",
  storageBucket: "zvladnuto-4e6cb.firebasestorage.app",
  messagingSenderId: "299881468872",
  appId: "1:299881468872:web:8c36e215cf40a91748e6fd",
  measurementId: "G-HZZG7JRYCC"
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
