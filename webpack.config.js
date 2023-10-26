// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./renderer.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配 .css 后缀的文件
        use: [
          "style-loader", // 将 CSS 注入到 DOM 中
          "css-loader", // 处理 CSS 文件
          "postcss-loader", // 使用 PostCSS 处理 CSS
        ],
      },
    ],
  },
};
