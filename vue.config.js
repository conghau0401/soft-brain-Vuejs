const { resolve } = require('path')
const aliasConfig = require('./alias.config.js')

const configs = {
  publicPath: '/',
  filenameHashing: true,
  runtimeCompiler: true,
  configureWebpack: {
    devtool: 'source-map',
    output: {
      filename: () => 'js/[name].[hash:16].js',
      chunkFilename: 'js/[name].[hash:16].js',
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: aliasConfig.reduce((acc, [key, path]) => {
        acc[key] = resolve(__dirname, path)
        return acc
      }, {}),
    },
  },
}

module.exports = configs
