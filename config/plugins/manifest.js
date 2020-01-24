exports.getManifestConfig = function getManifestConfig(config) {
  return {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: config.title,
      short_name: config.shortName,
      description: config.description,
      start_url: config.pathPrefix,
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: "standalone",
      icon: config.favicon, // This path is relative to the root of the site.
    },
  }
}
