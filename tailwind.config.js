module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./themes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        600: "600ms",
      },
      fontFamily: {
        hsi: ["Harlow Solid Italic"],
        mont: ["Montserrat", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      spacing: {
        "7.75rem": "7.75rem",
      },
      width: {
        "595px": "595px",
        "120px": "120px",
      },
      height: {
        "60px": "60px",
      },
      boxShadow: {
        "theme-1": "0 2px 4px 0 rgba(16, 18, 20, 0.08)",
      },
      colors: {
        "theme-1-black": "#101214",
      },
      lineHeight: {
        "18px": "18px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  darkMode: "class",
};
