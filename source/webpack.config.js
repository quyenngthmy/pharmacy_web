const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
module.exports = {
  mode: "development",
  stats: {
    children: true,
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  entry: {
    index: {
      import:'./src/index.js',
      filename: 'js/index.js'
    },
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery"
    }),
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about_us.html',
      template: './src/about_us.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/product.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'product_detail.html',
      template: './src/product_detail.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'basket.html',
      template: './src/basket.html',
      inject: "body",
      chunks: ['index'],
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/' }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    
  ],
};