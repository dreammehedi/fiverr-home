/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
