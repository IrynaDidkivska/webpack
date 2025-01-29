const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Creates an HTML file using this template
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "assets", noErrorOnMissing: true }, // Copies static assets from "public" to "dist/assets"
      ],
    }),
  ],
};
