const mobileMenu = document.querySelector(".menu-hamburger");
const iconHamburger = document.querySelector(".icon-hamburger");

iconHamburger.addEventListener("click", toggleIconMenu);
function toggleIconMenu() {
  mobileMenu.classList.toggle("inactive");
}
