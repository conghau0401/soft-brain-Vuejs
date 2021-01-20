const { resolve } = require('path')
const aliasConfig = require('../alias.config.js')

module.exports = {
  webpackFinal,
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/preset-scss',
    '@storybook/addon-essentials',
  ],
}

async function webpackFinal(config) {
  // Alias
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliasConfig.reduce((acc, [key, path]) => {
      acc[key] = resolve(__dirname, '../', path)
      return acc
    }, {}),
    '@tailwind.config.js': resolve(__dirname, '../tailwind.config.js'),
    '@tailwind.helper': resolve(__dirname, './helper.js'),
  }

  // Postcss
  config.module.rules.push({
    test: /\.scss$/,
    use: ['postcss-loader'],
    include: resolve(__dirname, '../'),
  })
  return config
}
