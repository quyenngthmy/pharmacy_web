const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const path = require('path');
module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/**/*"],
    port: 2900,
    hot: true,
  },


});