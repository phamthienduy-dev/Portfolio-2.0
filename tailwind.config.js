module.exports = {
  mode: "jit",
  important: true,
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "cta-vector": "url('../src/assets/ComputerVietnamese.svg')",
      },
      linearBorderGradients: {
        directions: {
          // defaults to these values
          t: "to top",
          tr: "to top right",
          r: "to right",
          br: "to bottom right",
          b: "to bottom",
          bl: "to bottom left",
          l: "to left",
          tl: "to top left",
        },
        colors: {
          red: "#f00",
          "red-blue": ["#f00", "#00f"],
          "blue-purple": ["#339AF0", "#4933F0"],
          "red-green-blue": ["#f00", "#0f0", "#00f"],
          "black-white-with-stops": ["#000", "#000 45%", "#fff 55%", "#fff"],
        },
        background: {
          "gray-50": "#F9FAFB",
          "gray-900": "#111827",
          white: "#fff",
        },
        border: {
          // defaults to these values (optional)
          1: "1px",
          2: "2px",
          4: "4px",
        },
      },
      transform: ["hover", "focus"],
      inset: {
        "-1": "-1px",
        22: "5.5rem",
        13: "3.25rem",
        45: "45%",
        "-35": "-35%",
        160: "40rem",
        76: "19rem",
        204: "51rem",
        144: "36rem",
        88: "22rem",
        196: "49rem",
        96: "24rem",
        214: "53.5rem",
        "-14": "-3.5rem",
        "-18": "-4.5rem",
        328: "82rem",
        0.92: "0.23rem",
        142: "35.5rem",
        192.8: "48.2rem",
        188.4: "47.1rem",
        144.8: "36.2rem",
        76.8: "19.2rem",
        "39%": "39%",
        "41%": "41%",
        "1/10": "10%",
        "-32.6": "-8.15rem",
      },
      colors: {
        primary: {
          100: "#58CAEA",
          200: "#339AF0",
          300: "#407bff",
        },
        secondary: {
          100: "#7A5BF5",
          200: "#4933F0",
          300: "#4C46BE",
        },
      },
      textColor: {
        primary: {
          100: "#58CAEA",
          200: "#339AF0",
          300: "#407bff",
        },
        secondary: {
          100: "#7A5BF5",
          200: "#4933F0",
          300: "#4C46BE",
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
      spacing: {
        cta: "82rem",
        44.8: "11.2rem",
        20.4: "5.1rem",
        39.6: "9.9rem",
        18.4: "4.6rem",
        72.8: "18.2rem",
        184: "46rem",
        "19.7%": "19.7%",
      },
      boxShadow: {
        nav: "0 16px 44px rgba(0,0,0,0.08)",
      },
    },
  },
  variants: {
    linearBorderGradients: ["responsive", "hover", "dark"], // defaults to ['responsive']
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
