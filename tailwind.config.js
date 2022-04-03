module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '600': '600ms',
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  darkMode: "class",
};
