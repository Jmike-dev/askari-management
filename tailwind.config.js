/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: "'League Spartan', sans-serif",
      },
      colors: {
        lightMode: {
          text: "#012820",
          background: "#f0fffb",
          primary: "#0ffad3",
          secondary: "#fd8188",
          accent: "#fbeb3c",
        },
        darkMode: {
          text: "d7fef6",
          background: "#000f0b",
          primary: "#05f0c9",
          secondary: "#7e0208",
          accent: "#c3b304",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
