/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "dark-red": "#581E21",
        "light-red": "#E50914",
        "dark-gray": "#1A1A1A",
        "darker-gray": "#141414",
        gray: "#CECDCC",
      },
    },
    borderWidth: {
      1: "1px",
    },
  },
  plugins: [],
};
