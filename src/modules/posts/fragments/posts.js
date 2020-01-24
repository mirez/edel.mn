import { graphql } from "gatsby"

export const query = graphql`
  fragment PostListItems on PRISMIC_PostConnectionConnection {
    edges {
      node {
        title
        main_image
        blurb
        _meta {
          id
          uid
          lang
          type
        }
        main_imageSharp {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
