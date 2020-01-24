exports.getLayoutVariants = function getLayoutVariants({ maxWidth = "800px" }) {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      px: [".75rem", ".75rem", "0"],
      bg: "background",
      transition:
        "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
    },
    main: {
      outer: {
        display: "flex",
        flex: "1 1 auto",
        justifyContent: "center",
        bg: "background",

        transition:
          "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
      },
      inner: {
        width: "100%",
        maxWidth,
      },
    },
    body: {},
    header: {
      outer: {
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        bg: "background",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
      },
      navigation: {
        display: "flex",
        alignItems: "center",

        maxWidth,
        py: 4,
      },
      inner: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth,
      },
    },
    mainNav: {},
    footer: {
      outer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        bg: "background",
        marginTop: 4,
        transition:
          "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
      },
      inner: {
        width: "100%",
        maxWidth,
      },
    },
  }
}
