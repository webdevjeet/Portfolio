document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        menuIcon.onclick = () => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('active');
        };
    }
});

document.querySelector('.gradent-btn').addEventListener('click', function() {
    window.open('https://wa.me/message/T35T5RQHZ5YJA1', '_blank');
});
