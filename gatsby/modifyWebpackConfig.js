// See https://www.gatsbyjs.org/packages/gatsby-1-config-css-modules/
const util = require('util')
const { cssModulesConfig } = require('gatsby-1-config-css-modules')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const E2 = new ExtractTextPlugin('styles.css')
const { extractTextPlugin } = require(`gatsby-1-config-extract-plugin`)
module.exports = ({ config, stage }, { precision }) => {
  const sassFiles = /\.s[ac]ss$/
  const jsFiles = /\.jsx?$/
  //  const sassModulesFiles = /\.module\.s[ac]ss$/
  const sassLoader = precision ? `sass?precision=${precision}` : `sass`

  switch (stage) {
    case `develop`:
      config
        .removeLoader(`sass`)
        .removeLoader(`sassModules`)
        .loader(`sassModules`, {
          test: sassFiles,
          loaders: [`style`, cssModulesConfig(stage), sassLoader],
        })
      config.preLoader(`js`, {
        test: jsFiles,
        loader: E2.extract([`css-literal`]),
      })

      config.plugin('extract-css-literal', () => E2)
      // config.merge({
      //   postcss: [
      //     require('postcss-icss-values'),
      //     require('postcss-modules-values'),
      //   ],
      // })
      console.log(config._plugins['extract-css-literal'].klass)
      return config
    default:
      return config
  }
}
