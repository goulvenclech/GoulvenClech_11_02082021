module.exports = {
  mode: 'jit',
  purge: [
    './src/*.tsx',
    './src/**/*.tsx',
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6060',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
