const hamburger = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-navbar");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active"); // buka/tutup menu
  document.body.classList.toggle("no-scroll"); // lock/unlock scroll
});
