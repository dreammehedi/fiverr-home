const followContent = [
  {
    aos: "flip-left",
    img: "https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529379.jpg?w=740&t=st=1709020536~exp=1709021136~hmac=bc425a2e073e6cf1ed8428b0cedec466f8f93b6511c025425b539400fa9d0a2a",
    icon: "ri-github-fill",
  },
  {
    aos: "flip-right",
    img: "https://img.freepik.com/free-photo/gradient-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529405.jpg?w=740&t=st=1709020532~exp=1709021132~hmac=763200346c94575b4a91e23167898d6d4bd02045547ca1944cf5ce3dae1f6fd6",
    icon: "ri-facebook-fill",
  },
  {
    aos: "flip-left",
    img: "https://img.freepik.com/free-photo/party-space-ready-online-celebration_23-2149347285.jpg?w=740&t=st=1709020538~exp=1709021138~hmac=daaf9c23c11ca40a85bf79b2d3bb5a36ebbfbca66bbc48116e791e4aedffe030",
    icon: "ri-messenger-fill",
  },
  {
    aos: "flip-right",
    img: "https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg?w=740&t=st=1709020537~exp=1709021137~hmac=b7acb4e650d84edfeaab7387f4f1f8c9620f6f83442affd62d7157ecac18cbfc",
    icon: "ri-google-fill",
  },
  {
    aos: "flip-left",
    img: "https://img.freepik.com/premium-photo/modern-designer-desktop-with-empty-black-computer-screen_670147-9316.jpg?w=740",
    icon: "ri-instagram-fill",
  },
  {
    aos: "flip-right",
    img: "https://img.freepik.com/free-photo/people-generating-images-using-artificial-intelligence-laptop_23-2150794332.jpg?w=740&t=st=1709020931~exp=1709021531~hmac=c4785630c9c8011d951f3dd410184e6d6acfde4e52327786df60c88ea2db4b15",
    icon: "ri-youtube-fill",
  },
  {
    aos: "flip-left",
    img: "https://img.freepik.com/free-photo/party-space-ready-online-celebration_23-2149347241.jpg?w=740&t=st=1709020892~exp=1709021492~hmac=2fe7aeb82842281dd2144a4c09aafc95cfdb9143861104d0704626333e1b178a",
    icon: "ri-twitter-fill",
  },
  {
    aos: "flip-right",
    img: "https://img.freepik.com/free-photo/top-view-set-gadgets-purple-neon-light-pink_155003-19113.jpg?w=740&t=st=1709020890~exp=1709021490~hmac=cc419cb4a94f3ec271ac3ade27a35d23009c06e4bca2132e6369252926e5a481",
    icon: "ri-flutter-fill",
  },
];

const postId = document.getElementById("post");
postId.innerHTML = `${followContent
  .map((post) => {
    return `<div data-aos="${post.aos}" class="overflow-hidden relative rounded-xl group">
    <figure>
      <img
        class="w-full h-auto md:h-[300px]  object-cover rounded-xl"
        src="${post.img}"
        alt=""
      />
    </figure>
    <div
      class="group-hover:top-1/2 transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center bg-primary-1/50 absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full"
    >
      <i class="text-white text-[50px] font-black ${post.icon}"></i>
    </div>
  </div>`;
  })
  .join("")}`;
