module.exports = {
  content: [
    "./src/**/*.{html,js,astro}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
  // plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
