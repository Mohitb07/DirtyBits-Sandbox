module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.js",
    "./styles/**/*.css",
    "./components/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
