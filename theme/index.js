const { getVariants } = require("./variants")
const { fonts, fontSizes, fontWeights } = require("./fonts")
const { space } = require("./space")
const themeColors = require("./colors")

function createTheme(props) {
  const { colors } = props
  const variants = getVariants(props)

  return {
    useColorSchemeMediaQuery: true,
    fonts,
    fontSizes,
    fontWeights,
    space,
    colors,
    ...variants,
  }
}

module.exports = {
  createTheme,
  ...themeColors,
}
