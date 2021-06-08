const layers = document.querySelector(".layers");
const navLinks = document.querySelector(".nav-links");

layers.addEventListener("click", mobileMenu);

function mobileMenu() {
    layers.classList.toggle("active");
    navLinks.classList.toggle("active");
}

const listLink = document.querySelectorAll(".nav-linkzs li");

listLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    layers.classList.remove("active");
    navLinks.classList.remove("active");
}