// See https://www.gatsbyjs.org/packages/gatsby-1-config-css-modules/
// const { extractTextPlugin } = require(`gatsby-1-config-extract-plugin`)
// const util = require('util')

const { cssModulesConfig } = require('gatsby-1-config-css-modules')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ExtractTextInstance = new ExtractTextPlugin('styles.css')

module.exports = ({ config, stage }, { precision }) => {
  const sassFiles = /\.(s[ac]ss|css)$/
  const jsFiles = /\.jsx?$/
  const sassLoader = precision ? `sass?precision=${precision}` : `sass`

  config
    .removeLoader(`css`)
    .removeLoader(`cssModules`)
    .removeLoader(`sass`)
    .removeLoader(`sassModules`)

  switch (stage) {
    case `develop`:
      config.loader(`my-css`, {
        test: sassFiles,
        loaders: [`style`, cssModulesConfig(stage), sassLoader],
      })

      config.preLoader(`js`, {
        test: jsFiles,
        loader: ExtractTextInstance.extract([`css-literal`]),
      })

      config.plugin('extract-css-literal', ExtractTextInstance.constructor)

      return config
    case `build-css`:
    case `develop-html`:
    case `build-html`:
    case `build-javascript`:
      config.loader(`my-css`, {
        test: sassFiles,
        loader: ExtractTextPlugin.extract(`style`, [
          cssModulesConfig(stage),
          sassLoader,
        ]),
      })
      return config
    default:
      return config
  }
}
