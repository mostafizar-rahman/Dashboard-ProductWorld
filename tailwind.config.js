/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./pages/**/*.{js,jsx}",
    "./Components/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Norican: ["Norican", "cursive"],
        Montserrat: ['Montserrat', "sans-serif"],
      },
    },
  },
  plugins: [],
};
