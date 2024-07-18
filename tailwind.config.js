/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
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
    },
  },
  plugins: [],
};
