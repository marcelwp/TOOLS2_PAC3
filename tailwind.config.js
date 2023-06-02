/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'green': '#bada55',
        'gray': '#f8f7f3',
      },
      screens: {
        'sm': '460px',
      }    
    },
  },
  plugins: [],
}

