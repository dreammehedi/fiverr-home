const upcomingContent = [
  {
    bg: "https://img.freepik.com/free-vector/versus-vs-comparison-banner-with-light-streak_1017-33398.jpg?w=740&t=st=1709026290~exp=1709026890~hmac=fc625c73c01d689ac1368fdca3f69d61f7c76780b36eeeb67e6dcc824dab61f3",
    category: "Terra",
    title: "INTERNATIONAL TOURNAMENT 2024",
    time: "December 10, 2022, 12:00 PM",
    watch: "Watch Stream",
    vs: "VS",
    img: {
      first:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af6252c9281d2e54552_image-1-team-esports-template.svg",
      second:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af5ef32a5995e3b17f9_image-2-team-esports-template.svg",
    },
  },
  {
    bg: "https://img.freepik.com/free-vector/comparison-versus-vs-screen-background_1017-32321.jpg?w=740&t=st=1709026287~exp=1709026887~hmac=031d234ff9541cb7901c771d3bd4c4971e25045c1e9926ebf2e3cacff9127170",
    category: "Terra",
    title: "INTERNATIONAL TOURNAMENT 2024",
    time: "December 10, 2022, 12:00 PM",
    watch: "Watch Stream",
    vs: "VS",
    img: {
      first:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af6252c9281d2e54552_image-1-team-esports-template.svg",
      second:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af6baffded24dd1632c_image-3-team-esports-template.svg",
    },
  },
  {
    bg: "https://img.freepik.com/free-vector/versus-vs-fight-battle-screen-banner_1017-33394.jpg?w=740&t=st=1709026372~exp=1709026972~hmac=3cb1179fb6418d89e251c3af270ac451f51b801bbac37a891c8b14c24b857c4a",
    category: "Terra",
    title: "INTERNATIONAL TOURNAMENT 2024",
    time: "December 10, 2022, 12:00 PM",
    watch: "Watch Stream",
    vs: "VS",
    img: {
      first:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af6252c9281d2e54552_image-1-team-esports-template.svg",
      second:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af6baffded639d1632b_image-4-team-esports-template.svg",
    },
  },
  {
    bg: "https://img.freepik.com/free-vector/versus-vs-screen-background-shiny-style-design_1017-27084.jpg?w=740&t=st=1709026369~exp=1709026969~hmac=4a79a28643ef5f07e245ca28e56bcfbd00b103d2d17015483dca1986a6b0d94f",
    category: "Terra",
    title: "INTERNATIONAL TOURNAMENT 2024",
    time: "December 10, 2022, 12:00 PM",
    watch: "Watch Stream",
    vs: "VS",
    img: {
      first:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af6252c9281d2e54552_image-1-team-esports-template.svg",
      second:
        "https://assets-global.website-files.com/60358955e12a8a2413b99edc/60367af5ef32a5995e3b17f9_image-2-team-esports-template.svg",
    },
  },
];

const upcomingMatchid = document.getElementById("upcoming-match");

upcomingMatchid.innerHTML = `${upcomingContent
  .map((upcoming) => {
    return `<div
style="
  background-image: url(${upcoming.bg});
"
class="group hover:scale-[1.01] transition-all duration-300 ease-linear cursor-pointer bg-no-repeat bg-center bg-cover p-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 rounded-xl"
>
<div
  class="group-hover:text-primary-1 transition-all duration-300 ease-linear flex flex-col gap-2"
>
  <span class="font-bold text-base">${upcoming.category}</span>
  <h1 class="font-semibold text-green-500 text-2xl md:text-3xl uppercase">
  ${upcoming.title}
  </h1>
  <div
    class="flex flex-col lg:flex-row items-start justify-start lg:items-center gap-4"
  >
    <div class="flex gap-2">
      <i class="ri-time-fill"></i>
      <p>${upcoming.time}</p>
    </div>
    <div class="flex gap-2">
      <i class="ri-timer-flash-fill"></i>
      <p>${upcoming.watch}</p>
    </div>
  </div>
</div>
<div
  class="group-hover:scale-[1.05] transition-all duration-300 ease-linear flex justify-center md:justify-end items-center gap-4"
>
  <img
    src="${upcoming.img.first}"
    alt=""
  />
  <span class="uppercase text-3xl text-green-500 font-chakra-petch font-semibold"
    >${upcoming.vs}</span
  >
  <img
    src="${upcoming.img.second}"
    alt=""
  />
</div>
</div>`;
  })
  .join("")}`;
