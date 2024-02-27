const menu = [
  {
    title: "Home",
    link: "./index.html",
  },
  {
    title: "About Us",
    link: "./about-us.html",
  },
  {
    title: "Services",
    link: "./services.html",
  },
  {
    title: "Products",
    link: "./products.html",
  },
  {
    title: "Contact",
    link: "./contact.html",
  },
];
// mobile menu
const mobileMenu = document.getElementById("mobile-menu");
mobileMenu.innerHTML = `${menu
  .map((menu) => {
    return `<li class="hover:text-green-500 hover:pl-1"><a href="${menu.link}">${menu.title}</a></li>`;
  })
  .join("")}`;

// desktop menu
const desktopMenu = document.getElementById("desktop-menu");
desktopMenu.innerHTML = `${menu
  .map((menu) => {
    return `<li class="hover:text-primary-1"><a href="${menu.link}">${menu.title}</a></li>`;
  })
  .join("")}`;
