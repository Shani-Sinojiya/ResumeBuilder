module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        600: "600ms",
      },
      fontFamily: {
        hsi: ["Harlow Solid Italic"],
        mont: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "7.75rem": "7.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  darkMode: "class",
};
