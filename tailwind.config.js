/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'graphicode_purple': {
          500: '#E9D0D5',
          700: '#644C80',
          900: '#442561'
        },
        'photos_brown': '#302A26',
        'nutella_brown': '#3A0C09',
        'nicosVape_blue': {
          700: '#103770',
          900: '#091D35'
        },
        'ideaVerde_green': {
          700: '#0A5E34',
          900: '#062B17'
        }
      }
    }
  },
  plugins: [require("daisyui")]
};