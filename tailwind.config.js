/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  safelist: ["animate-[fade-in-right_1s_ease-in-out]"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
      colors: {
        "dark-red": "#581E21",
        "light-red": "#E50914",
        "dark-gray": "#1A1A1A",
        "darker-gray": "#141414",
        gray: "#CECDCC",
        "semi-dark-gray": "#191919",
      },
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    screens: {
      xl: "1240px",
      xs: "500px",
      xxs: "400px",
      sm: "640px",
      lg: "1024px",
      lgp: "1100px",
      "2xl": "1538px",
      "3xl": "1638px",
      md: "768px",
      mdp: "900px",
    },
  },
  plugins: [],
};
