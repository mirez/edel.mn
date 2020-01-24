const { website } = require("./config/website")
const { createPluginConfig } = require("./config/plugins")

const plugins = createPluginConfig(website)

module.exports = {
  siteMetadata: {
    ...website,
  },
  plugins,
}
