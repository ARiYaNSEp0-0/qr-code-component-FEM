/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html", "./src/css/*"],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#3685FF",
          700: "#2C7DFA",
          900: "#1F314F",
        },
        gray: {
          300: "#D5E1EF",
          600: "#7D889E",
        },
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: "0.9375rem",
        xl: "1.375rem",
      },
      boxShadow: {
        "2xl": "0 25px 25px rgba(0, 0, 0, 0.0477)",
      },
      borderRadius: {
        md: "10px",
        lg: "20px",
      },
    },
  },
  plugins: [],
};
