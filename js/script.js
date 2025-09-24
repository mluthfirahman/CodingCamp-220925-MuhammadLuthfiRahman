
// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});

const user = "ubi"; // Ganti dengan nama user yang diinginkan
document.getElementById("user").textContent = `${user}`;