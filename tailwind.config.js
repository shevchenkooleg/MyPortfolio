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
        "menu-hover-gray":"#ada8a2",
        "main-circle": '#f5b731',
        'secondary-text-color': '#706d6d',
        'background-error': 'rgba(169,6,6,0.76)'
      },
      fontFamily: {
        'sans': ['Oswald', 'sans-serif'],
        'description': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
