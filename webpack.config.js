const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const file_loader = {
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {}
    }
  ]
};

const js = {
  test: /\.(js)$/,
  use: [
    {
      loader: "babel-loader",
      options: { presets: ["es2015"] }
    }
  ]
};

const postcss = {
  loader: "postcss-loader",
  options: {
    plugins() {
      return [autoprefixer({ browsers: "last 3 versions" })];
    }
  }
};

const styles = {
  test: /\.(styl)$/,
  use: ExtractTextPlugin.extract([
    "css-loader?sourceMap:true",
    postcss,
    "stylus-loader?sourceMap:true"
  ])
};

const template = { test: /\.pug$/, loader: "pug-loader" };

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },

  module: {
    loaders: [styles, js, template, file_loader]
  },

  devtool: "eval-source-map",

  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "Boilerplate",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/template.pug"
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] }
    })
  ]
};
