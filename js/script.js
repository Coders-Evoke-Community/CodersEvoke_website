// navigation bar logic 
const layers = document.querySelector(".layers");
const navLinks = document.querySelector(".nav-links");

// scroll to top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
// listen for click event and run function mobileMenu in return
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