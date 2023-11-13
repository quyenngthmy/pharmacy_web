const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = merge(config, {
    mode: "production",
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [
         new HtmlMinimizerPlugin(),
         new CssMinimizerPlugin(),
         new TerserWebpackPlugin({
          extractComments: false,
        }),
      ],
    },
    performance: {
        maxAssetSize: 10000000,
        hints: false
    },
  });