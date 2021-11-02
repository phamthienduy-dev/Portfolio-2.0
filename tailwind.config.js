module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        22: "5.5rem",
        13: "3.25rem",
        45: "45%",
      },
      colors: {
        primary: {
          100: "#58CAEA",
          200: "#339AF0",
        },
        secondary: {
          100: "#7A5BF5",
          200: "#4933F0",
        },
      },
      textColor: {
        primary: {
          100: "#58CAEA",
          200: "#339AF0",
        },
        secondary: {
          100: "#7A5BF5",
          200: "#4933F0",
        },
      },
      fontFamily: {
        montserrat: ["montserrat"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1366px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
