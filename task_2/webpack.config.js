const path = require("path");

module.exports = {
  mode: "production",

  entry: "./src/index.js",

  output: {
    // Вказівка в яку папку перемістити файл з кодом
    path: path.resolve(__dirname, "public" /* переіменування назви папки */),
    // переіменування назви фінального готового файлу
    // бувають різні варіанти назв на розсуд розробника: main.js, index.js, bundle.js (назви в подальшому ускладнюються)
    filename: "index.js",
  },
  module: {
    rules: [
      {
        // Регулярним виразом вказуємо за якими розширенями слідкуємо
        test: /\.scss$/,
        // Порядок лоадерів важливий!
        // для їх встіновлення були прописані команди:
        // "npm i style-loader css-loader sass-loader" +
        // "npm i sass"
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
