const newsPostContent = [
  {
    img: "https://assets-global.website-files.com/60358955e12a8aa033b99eed/6036a378ae900b289b840721_image-6-blog-post-esports-template-p-800.jpeg",
    btn: "MERCH",
    date: "JANUARY 27, 2024",
    title: {
      first: "OUR NEW ",
      second: " BRANDED HEADPHONES ",
      third: "ARE NOW FOR SALE",
    },
  },
  {
    img: "https://img.freepik.com/free-photo/side-view-hands-typing-keyboard_23-2149349996.jpg?w=740&t=st=1709026819~exp=1709027419~hmac=3f5f544e6cd9ed1192cdbfdca648902c6662930e04c9429a5f9849bb2dfb0ef3",
    btn: "APRIL",
    date: "JANUARY 1, 2024",
    title: {
      first: "OUR NEW ",
      second: " BRANDED HEADPHONES ",
      third: "ARE NOW FOR SALE",
    },
  },
];
const newsPostId = document.getElementById("news-post");
newsPostId.innerHTML = `${newsPostContent
  .map((news) => {
    return `<div>
    <figure class="overflow-hidden rounded-xl">
      <img
        class="w-full h-auto md:min-h-[400px] object-cover cursor-pointer transition-all duration-300 ease-linear hover:scale-[1.05]"
        src="${news.img}"
        alt=""
      />
    </figure>

    <div class="flex flex-col gap-3">
      <div class="flex justify-between items-center mt-4">
        <button
          class="group relative min-h-[50px] w-40 overflow-hidden border border-primary-1 rounded-xl bg-transparent text-primary-1 btn shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-primary-1 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-primary-1 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full"
        >
          <span
            class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-primary-1 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-primary-1 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"
          ></span>
          <span
            class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white"
            >${news.btn}</span
          >
        </button>
        <h4 class="uppercase font-medium text-lg">${news.date}</h4>
      </div>
      <h1 class="font-semibold text-2xl md:text-3xl uppercase">
      ${news.title.first} <span class="text-green-500">${news.title.second}</span> ${news.title.third}
      </h1>
    </div>
  </div>`;
  })
  .join("")}`;
