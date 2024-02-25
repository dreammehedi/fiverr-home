// responsive mobile menu toggle
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("opacity-100");
  mobileMenu.classList.toggle("-left-0");
});

// scroll to sticky menu
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("nav");
  if (window.scrollY > 150) {
    navbar.classList.add(
      "!bg-black/80",
      "fixed",
      "w-full",
      "h-auto",
      "top-0",
      "left-0"
    );
  } else {
    navbar.classList.remove(
      "!bg-black/80",
      "fixed",
      "w-full",
      "h-auto",
      "top-0",
      "left-0"
    );
  }
});
