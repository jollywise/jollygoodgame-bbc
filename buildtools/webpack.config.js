const webpack = require('webpack');
const path = require('path');

const root = path.resolve(__dirname, '../');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

const MODE = process.env.NODE_ENV; // development, production
console.log('building ' + MODE + ' release');
const DEBUG = true;

module.exports = {
  entry: './src/js/index.js',
  mode: MODE,
  resolve: {
    alias: {},
    modules: [src + '/js', 'libs', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  output: {
    path: dist,
    filename: 'jollygoodgame-bbc.js',
    library: 'jollygoodgame-bbc',
    libraryTarget: 'umd',
  },
  stats: 'verbose', // minimal, none, normal, verbose ::: https://webpack.js.org/configuration/stats/
  externals: {
    phaser: 'Phaser',
    webfontloader: {
      commonjs: 'webfontloader',
      commonjs2: 'webfontloader',
      amd: 'webfontloader',
      root: 'webfontloader',
    },
    jollygoodgame: {
      commonjs: 'jollygoodgame',
      commonjs2: 'jollygoodgame',
      amd: 'jollygoodgame',
      root: 'jollygoodgame',
    },
  },
  devtool: process.env.NODE_ENV === 'development' ? 'none' : 'source-map',
  plugins: [],
};
