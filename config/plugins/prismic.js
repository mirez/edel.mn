const cwd = process.cwd()

const pages = [
  {
    type: "Post",
    match: "/blog/:uid",
    path: "/posts",
    component: require.resolve(cwd + "/src/modules/posts/index.js"),
  },
]

exports.getPrismicSourceConfig = function getPrismicSourceConfig(config) {
  return {
    resolve: `gatsby-source-prismic-graphql`,
    options: {
      repositoryName: config.prismicRepo,
      accessToken: config.prismicAccessToken,
      path: config.prismicPreviewPath,
      previews: config.prismicPreviewEnabled,
      pages,
    },
  }
}
