exports.getCardVariants = function getCardVariants() {
  return {
    card: {
      body: {
        px: 2,
        py: 2,
      },
    },
    grid: {
      default: {
        display: "grid",
        gap: ["2em"],
      },
    },
    medium: {
      overflow: "hidden",
      borderRadius: "0.5em",
      boxShadow: "rgba(15, 17, 21, 0.2) 0px 3px 6px 0px",
      transition:
        "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
    },
  }
}
