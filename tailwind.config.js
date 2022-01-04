const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      main: "#141821",
      gray: colors.gray,
      purple: colors.purple,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [],
};

// #141821;
