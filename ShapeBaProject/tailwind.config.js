/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray': '#F7F7FB',
        'darkgray': '#4B4B4B',
        'orange': '#EC744A',
        'yellow': '#FBBB57',
        'green': '#025146',
      }
    },

  },
  plugins: [],
}


