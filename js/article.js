let articleContent = [
  {
    aos: "fade-up",
    img: "https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529379.jpg?w=740&t=st=1709026623~exp=1709027223~hmac=6443c29f16f1bcfe6dc8c085a0973181b314b5fe370ab137ab70040e67a6dc6f",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
  {
    aos: "fade-down",
    img: "https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529375.jpg?w=740&t=st=1709026618~exp=1709027218~hmac=33566ee60a16558a06eb4ff2f64ef485a5791f93e2f9e7b0306c7b808df5d2cf",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
  {
    aos: "fade-up",
    img: "https://img.freepik.com/free-photo/colorful-light-coming-out-laptop-screen-darkness_181624-30431.jpg?w=740&t=st=1709026693~exp=1709027293~hmac=6f30e0abad33559fa8c7a8defffce26cbb75aff849c573989c72942828d92646",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
  {
    aos: "fade-down",
    img: "https://img.freepik.com/free-photo/party-space-ready-online-celebration_23-2149347282.jpg?w=740&t=st=1709026713~exp=1709027313~hmac=02ecc32ad1c7ece74ecc40886fb6e2e139b1f48159b765df7c4cc6c0064325db",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
  {
    aos: "fade-up",
    img: "https://img.freepik.com/free-photo/party-space-ready-online-celebration_23-2149347282.jpg?w=740&t=st=1709026713~exp=1709027313~hmac=02ecc32ad1c7ece74ecc40886fb6e2e139b1f48159b765df7c4cc6c0064325db",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
  {
    aos: "fade-down",
    img: "https://img.freepik.com/free-photo/front-view-young-female-student-red-shirt-black-bag-using-laptop-white_140725-16643.jpg?w=740&t=st=1709026719~exp=1709027319~hmac=ba51bc6291a1d6a450ad16c55b4ecf57cbf98065e06013b2d4506ee9a7f31971",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
  {
    aos: "fade-up",
    img: "https://img.freepik.com/free-photo/high-angle-keyboard-with-lights_23-2149680243.jpg?w=740&t=st=1709026714~exp=1709027314~hmac=8634767d02e097ed26766e9db14eae2e7c0e222e020fda460b98003314c3f3c9",
    imgTitle: "THE BEST KEYBOARD FOR HIGH-END GAMING",
  },
];
const findArticle = (checkShowAllPostsClick) => {
  const articleNewsId = document.getElementById("articles-news");
  const showAllPostId = document.getElementById("show-all-posts");
  // sort array
  let displayedArticle = articleContent;

  if (displayedArticle.length > 5 && !checkShowAllPostsClick) {
    showAllPostId.classList.remove("hidden");
    displayedArticle = displayedArticle.slice(0, 5);
  } else {
    showAllPostId.classList.add("hidden");
  }
  articleNewsId.innerHTML = `${displayedArticle
    .map((article) => {
      return `<div data-aos="${article.aos}" class="flex flex-col gap-3">
    <figure class="overflow-hidden rounded-xl">
      <img
        class="w-full h-auto object-cover cursor-pointer transition-all duration-300 ease-linear hover:scale-[1.05]"
        src="${article.img}"
        alt=""
      />
    </figure>
    <figcaption class="font-semibold text-lg text-primary-1 md:text-xl uppercase">
      ${article.imgTitle}
    </figcaption>
  </div>`;
    })
    .join("")}`;
};

findArticle();
const showAllPosts = () => {
  findArticle(true);
};
