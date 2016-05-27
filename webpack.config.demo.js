var webpack = require('webpack');
var config = require('./webpack.config.js');

config.devtool = 'source-map',

config.entry = './demo/js/index.js',

config.output = {
  path: __dirname + '/demo/dist',
  filename: 'dist.js'
}

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    }
  })
]);

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
  }
])

module.exports = config;
