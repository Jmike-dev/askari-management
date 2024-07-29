/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: "'League Spartan', sans-serif",
      },
      colors: {
        lightMode: {
          text: "#150a04",
          background: "#fdf9f7",
          primary: "#d66829",
          secondary: "#87e892",
          accent: "#55ddab",
        },
        darkMode: {
          text: "#150a04",
          background: "#fdf9f7",
          primary: "#d66829",
          secondary: "#87e892",
          accent: "#55ddab",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
