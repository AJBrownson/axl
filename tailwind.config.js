/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'xxs': '320px',
    //   'xs': '375px',
    //   's': '425px',
    //   ...defaultTheme.screens,
    // },
    extend: {
      fontFamily: {
        conthrax: ["conthrax", "sans-serif"]
      },
      backgroundImage: {
        'hero': "url('/background.svg')",
        'hero-sm': "url('/background-small.svg')",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("rippleui")],
}