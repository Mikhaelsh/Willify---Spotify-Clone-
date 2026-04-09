document.addEventListener('DOMContentLoaded', (event) => {
    const homeLink = document.getElementById('homeLink');
    const registerLink = document.getElementById('registerLink');

    registerLink.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    aboutLink.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
    alexandraLink.addEventListener('click', () => {
        window.location.href = 'alexandra.html';
    });
    
    homeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        window.location.href = 'home.html';
    });
});