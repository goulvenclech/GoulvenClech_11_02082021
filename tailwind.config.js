const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    "./src/*.tsx",
    "./src/**/*.tsx",
    "./index.html"
  ],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FF6060",
      },
      padding: {
        notFoundPage: "10vh",
      },
      fontSize: {
        "15xl": "12rem",
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
