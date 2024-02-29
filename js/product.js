const productContent = [
  {
    aos: "fade-up-right",
    img: "https://img.freepik.com/free-photo/man-with-beard-looks-confused-lost_144627-60986.jpg?w=740&t=st=1709021041~exp=1709021641~hmac=4eda4246339ae010bbb4a0c8f70a3d299106984369946c615346f23a071553fd",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-left",
    img: "https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-14026.jpg?w=740&t=st=1709021046~exp=1709021646~hmac=715f29aa11a910c30fc43484d49f5d46de989a383bfc1f9acb8f8c51432ef1be",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-right",
    img: "https://img.freepik.com/free-photo/attractive-fashion-woman-orange-dress-posing-near-white-wall_1153-8537.jpg?w=360&t=st=1709021049~exp=1709021649~hmac=1cadc97171fa7e625040d8d55fce6cd99ab11407f6cbd9af40a6f5153dcb4cfb",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-left",
    img: "https://img.freepik.com/free-photo/front-view-male-courier-yellow-uniform-cape-holding-delivery-coffee-cup-pink-wall_140725-45648.jpg?w=740&t=st=1709021058~exp=1709021658~hmac=27366177facc8ae38db41f952e83ce97f8e84b6c25bbc79447c6f45264978754",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-right",
    img: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-calm-emotions-face_186202-6988.jpg?w=740&t=st=1709021296~exp=1709021896~hmac=f01e634c2b5373cba9b1330c0b9f382a93bb185ab8ca5a0a43074b8a37bb0fa0",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-left",
    img: "https://img.freepik.com/free-photo/portrait-pretty-smiling-woman-posing-isolated_231208-10447.jpg?w=740&t=st=1709021297~exp=1709021897~hmac=3e19d765e21cad5a5ffded4fde5d24780b5b241e695f058905e219d6d4d085d1",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-right",
    img: "https://img.freepik.com/free-photo/portrait-gorgeous-body-positive-latin-woman-pink-sports-hoodie-exercising-with-dumbbells-pink_149155-4641.jpg?w=360&t=st=1709021300~exp=1709021900~hmac=eb022b89ced0cee4562e9b2bb8b838165718161263c37106c75442145ae1629a",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
  {
    aos: "fade-up-left",
    img: "https://img.freepik.com/free-photo/portrait-young-woman-holding-apple-against-street-background_1153-8611.jpg?w=360&t=st=1709021351~exp=1709021951~hmac=3ce86aa0ee296e38bee2f673dd68410a0317fa851a6662337343c7dc66dcea7c",
    title: "ESPORTS TEAM SHIRT BLACK LINE",
    price: 19.99,
  },
];

const findProducts = (checkShowAllMatchesClick) => {
  const productDetailesId = document.getElementById("product-detailes");
  const showAllProductsId = document.getElementById("show-all-products");
  // sort array
  let displayedProducts = productContent;
  if (displayedProducts.length > 4 && !checkShowAllMatchesClick) {
    showAllProductsId.classList.remove("hidden");
    displayedProducts = displayedProducts.slice(0, 4);
  } else {
    showAllProductsId.classList.add("hidden");
  }

  productDetailesId.innerHTML = `${displayedProducts
    .map((product) => {
      return `<div data-aos="${product.aos}" class="flex flex-col gap-3">
<figure class="overflow-hidden rounded-xl">
<img
  class="w-full h-auto md:h-[300px] cursor-pointer transition-all duration-300 ease-linear hover:scale-[1.05] object-cover rounded-xl bg-blend-screen"
  src="${product.img}"
  alt=""
/>
</figure>
<div
  class="flex flex-col justify-center items-center gap-2 text-center px-2 lg:px-4"
>
  <h3 class="uppercase font-semibold text-base md:text-lg text-primary-1">
  ${product.title}
  </h3>
  <p class="text-green-500 font-medium uppercase text-lg">
    $ <span>${product.price} </span>USD
  </p>
</div>
</div>`;
    })
    .join("")}`;
};

findProducts();
const showAllProducts = () => {
  findProducts(true);
};
