exports.getTextVariants = function getTextVariants(colors) {
  return {
    paragraph: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      my: 2,
    },
    h1: {
      color: "text",
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [4, 5],
    },
    h2: {
      color: "text",
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [3, 4],
    },
    h3: {
      color: "text",
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [2, 3],
    },
  }
}
