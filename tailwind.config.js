/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#61dafb",
        "background-gray": "#d9d3c8",
        "background-gray-light": "#efe8db",
        "background-white": '#FFF',
        "main-circle": '#f5b731'
      },
      fontFamily: {
        'sans': ['Oswald', 'sans-serif'],
        'description': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
