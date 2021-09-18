module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        octane: "'OctaneTypeface', sarif",
      },
      fontSize: {
        "header-content": "72px",
        "header-subtitle": "23px",
      },
      colors: {
        "main-green": "#34C1A8",
      },
      zIndex: {
        "-z-1": -1,
        "z-1": 1,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
