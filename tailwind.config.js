/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["'Great Vibes'", "cursive"],
      },
      colors: {
        gold: "#8A6A1F",
        cream: "#FFF7E1",
        dark: "#2C2C2C",
      },
    },
  },
  plugins: [],
};
