// responsive mobile menu toggle
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("opacity-100");
  mobileMenu.classList.toggle("-left-0");
});
