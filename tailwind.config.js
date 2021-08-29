const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    // prettier-ignore
    './index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cerebri Sans", ...defaultTheme.fontFamily.sans],
      },
      fill: (theme) => theme("colors"),
    },
  },
  variants: {
    extend: {
      fill: ["focus", "group-hover"],
      appearance: ["hover", "focus"],
    },
  },
  plugins: [],
};
