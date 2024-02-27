const sponsoredContent = [
  "https://assets-global.website-files.com/60358955e12a8a2413b99edc/6035a652475a51ccfa2984fc_logo-1-sponsor-esports-template.svg",
  "https://assets-global.website-files.com/60358955e12a8a2413b99edc/6035a6522bc7e697ae8fbb2f_logo-2-sponsor-esports-template.svg",
  "https://assets-global.website-files.com/60358955e12a8a2413b99edc/6035a6522acc655e5a97ae46_logo-3-sponsor-esports-template.svg",
  "https://assets-global.website-files.com/60358955e12a8a2413b99edc/6035a65298b6ec28fb929496_logo-4-sponsor-esports-template.svg",
];
const sponsoredId = document.getElementById("sponsored");
sponsoredId.innerHTML = `${sponsoredContent
  .map((logo) => {
    return `<img
    class="max-w-[150px] object-cover h-auto cursor-pointer opacity-50 hover:opacity-100 hover:scale-[1.1]"
    src="${logo}"
    alt="Facebook"
  />`;
  })
  .join("")}`;
