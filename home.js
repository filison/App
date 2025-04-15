function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
    menu.classList.toggle("hidden");
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    });
}
