module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        octane : "'OctaneTypeface', sarif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
