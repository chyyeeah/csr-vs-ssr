const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: path.resolve('client/src/index.jsx'),
  output: {
    path: path.resolve('client/dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
  ],
};

const serverConfig = {
  entry: path.resolve('server/index.js'),

  target: 'node',
  externals: [nodeExternals()], // prevents bundling node_modules

  output: {
    path: path.resolve('server-build'),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
};


module.exports = [ clientConfig, serverConfig ];