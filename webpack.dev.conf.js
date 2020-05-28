const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: 'development',

  devServer: {
    port: 8081,
    // contentBase: this.devServer,
    contentBase: baseWebpackConfig.externals.paths.dist, // open webpack in this folder
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});
