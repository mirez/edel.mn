const { getLayoutVariants } = require("./layout")
const { getTextVariants } = require("./text")
const { getMessyVariants } = require("./messy")

exports.getVariants = function getVariants(props) {
  return {
    layout: getLayoutVariants(props),
    text: getTextVariants(props),
    ...getMessyVariants(props),
  }
}
