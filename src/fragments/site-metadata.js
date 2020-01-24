import { graphql } from "gatsby"

export const query = graphql`
  fragment SiteMetadata on SiteSiteMetadata {
    title
    description
    twitter
    ogLanguage
    author
  }
`
