const plugin = require("tailwindcss/plugin");
const { colors, twTypographyMap } = require("ownui-system");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ownui-system/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Add your custom styles here
      addUtilities(twTypographyMap, ["responsive", "hover"]);
    }),
  ],
};
