// See https://www.gatsbyjs.org/packages/gatsby-1-config-css-modules/

const { cssModulesConfig } = require('gatsby-1-config-css-modules')

module.exports = ({ config, stage }, { precision }) => {
  const sassFiles = /\.s[ac]ss$/
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
      return config
    default:
      return config
  }
}
