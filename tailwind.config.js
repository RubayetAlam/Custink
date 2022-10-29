/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html,js}'],
  theme: {
    extend: {
      display:['group-hover'],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
