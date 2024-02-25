/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      "chakra-petch": ["Chakra Petch", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      colors: {
        "neutral-100": "white",
        "neutral-200": "#dfe2e5",
        "primary-1": "#f32c46",
        "neutral-600": "#282d34",
        "secondary-1": "#202329",
        "neutral-700": "#11161e",
        "neutral-500": "#555b63",
        "neutral-400": "#82878c",
        "neutral-300": "#abafb2",
        "neutral-800": "#04080f",
      },
    },
  },
  plugins: [],
};
