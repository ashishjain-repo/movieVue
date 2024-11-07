/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      xs:'480px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

