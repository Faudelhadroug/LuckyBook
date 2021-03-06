module.exports = {
  mode: 'jit',
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
        'secondary-contrast': '#176218',
        'neutral' : '#EEEEEC',
        'neutral-dark': '#C1C1C1',
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
