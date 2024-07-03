
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
})


const dropdownOpen = document.querySelector(".navbar-menu");

document.querySelector(".nav-bars").addEventListener("click", (e) => {
    dropdownOpen.classList.toggle("open")
})
document.querySelector(".nav-close").addEventListener("click", (e) => {
    dropdownOpen.classList.toggle("open")
})

