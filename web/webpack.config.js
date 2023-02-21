const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.ts",
  },
  devtool: "inline-source-map",
  devServer: {
    static: distPath,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: distPath,
    clean: true,
  },
};
