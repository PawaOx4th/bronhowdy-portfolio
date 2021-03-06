module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "2cm": "0.5px",
        469: "469px",
      },
      fontFamily: {
        octane: "'OctaneTypeface', sarif",
        Birthstone: "Birthstone, cursive",
        KohSantepheap: "Koh Santepheap, cursive",
      },
      fontSize: {
        "header-content": "72px",
        "header-subtitle": "23px",
      },
      colors: {
        "main-green": "#34C1A8",
        main: {
          "medium-turquoise": "#49D7BB",
          "jungle-green": "#19A590",
          "dark-pastel-purple": "#9D75CE",
          "han-purple": "#5037FF",
        },
      },
      zIndex: {
        "-z-1": -1,
        "z-1": 1,
      },
      inset: {
        "3/12": "25%",
        "4/12": "33%",
        "4.5/12": "36%",
        "5/12": "41.67%",
        "5.5/12": "45%",
        "6/12": "50%",
        "7/12": "58%",
        17: "70px",
        27: "120px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
