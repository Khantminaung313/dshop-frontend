/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': "Ubuntu",
        'poppins': "Poppins"
      },
      colors: {
        'light_blue_1': "#3371A0",
        'light_blue_2': "#7EAACB",
        'dark_blue_1': "#05385F",
        'dark_blue_2': "#011728",
        'd_red': "#D02E07",
        'd_orange': "#D07A07",
        'd_yellow': "#D0A407",
        'd_white': "#ffffff",
        'd_dark': "#000000",
        'd_light_gray': "#efefef",
        'd_dark_gray': "#353535"
      }
    },
  },
  plugins: [
    
  ],
  darkMode: 'selector',
}

