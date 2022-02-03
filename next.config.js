const withCSS = require("@zeit/next-css");
const MonacoEditorWebpackPlugin = require("monaco-editor-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const withTM = require("next-transpile-modules")(["monaco-editor"]);

module.exports = withTM({
  webpack: (config) => {
    const rule = config.module.rules
      .find((rule) => rule.oneOf)
      .oneOf.find(
        (r) => r.issuer && r.issuer.include && r.issuer.include.includes("_app")
      );
    if (rule) {
      rule.issuer.include = [
        rule.issuer.include,
        /[\\/]node_modules[\\/]monaco-editor[\\/]/,
      ];
    }
    config.plugins.push(
      new MonacoEditorWebpackPlugin({
        languages: ["javascript", "python", "java", "cpp"],
        filename: "static/[name].worker.js",
      })
    );
    return config;
  },
});
