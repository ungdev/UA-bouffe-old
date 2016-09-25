const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssnext      = require('postcss-cssnext');
const nested       = require('postcss-nested');
const atImport     = require('postcss-import');

const root = (...args) => path.join(__dirname, 'src', ...args);

const webpackConfig = {
  name    : 'client',
  target  : 'web',
  devtool : 'source-map',
  entry   : root('app.js'),
  output  : {
    filename  : 'bundle.js',
    path      : root('..', 'dist'),
    publicPath: '/dist/'
  },
  resolve : {
    root      : root(),
    extensions: ['', '.js', '.jsx', '.json'],
    alias     : {
      'react'    : 'react-lite',
      'react-dom': 'react-lite'
    }
  },
  module : {
    loaders: [
      {
        test   : /\.jsx?/,
        loader : 'babel',
        exclude: /node_modules/,
        query  : {
          plugins: ['transform-runtime', 'transform-flow-strip-types'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?sourceMap&minimize&-url!postcss')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  postcss: webpack => [
    atImport({
      paths: [
        root('css'),
        root('..', 'node_modules')
      ],
      addDependencyTo: webpack
    }),
    nested,
    cssnext({
      browsers: '> 0%'
    })
  ]
};

if (isProd) {
    console.log('[Production build loaded]');

    webpackConfig.devtool = null;

    webpackConfig.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));

    webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());

    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: false }));
}

module.exports = webpackConfig;
