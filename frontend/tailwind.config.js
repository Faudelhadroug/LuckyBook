module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0E0E1D',
        'secondary': '#32B734',
        'neutral' : '#EEEEEC',
        'danger' : '#D27364',
        'twitter' : '#199af0',
        'discord' : '#5865F2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
