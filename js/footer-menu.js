const footerMenuList = [
  {
    title: "Pages",
    menu: ["Home", "About Us", "Services", "Products", "Contact"],
  },
  {
    title: "Sports",
    menu: [
      "Football",
      "Basketball",
      "Tennis",
      "Baseball",
      "Soccer",
      "Golf",
      "Cricket",
      "Rugby",
      "Hockey",
      "Volleyball",
    ],
  },
  {
    title: "Product",
    menu: [
      "Electronics",
      "Clothing",
      "Home & Kitchen",
      "Books",
      "Beauty & Personal Care",
      "Sports & Outdoors",
      "Toys & Games",
      "Health & Wellness",
      "Automotive",
      "Pet Supplies",
    ],
  },
];
const footerMenuId = document.getElementById("footer-menu");
footerMenuId.innerHTML = `${footerMenuList
  .map((menu) => {
    console.log(menu.menu);
    return `<div class="flex flex-col gap-2">
    <h2 class="text-primary-1 text-xl font-semibold uppercase">${
      menu.title
    }</h2>
    <ul
      class="font-medium flex flex-wrap gap-6 *:transition-all *:duration-300 *:ease-linear"
    >${menu.menu
      .map((currMenu) => {
        return `<li class="text-green-500 hover:text-primary-1"><a href="./${currMenu.toLowerCase()}.html">${currMenu}</a></li>`;
      })
      .join("")}</ul>
  </div>`;
  })
  .join("")}`;
