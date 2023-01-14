/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#61dafb",
        "background-gray": "#d9d3c8",
        "background-gray-gradient": "#cbc4bc",
        "background-gray-light": "#efe8db",
        "background-white": '#FFF',
        "main-circle": '#f5b731',
        'secondary-text-color': '#706d6d',
      },
      fontFamily: {
        'sans': ['Oswald', 'sans-serif'],
        'description': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
