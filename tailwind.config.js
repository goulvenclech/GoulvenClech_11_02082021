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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(50%)" },
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
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
