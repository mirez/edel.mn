import { graphql } from "gatsby"

export const query = graphql`
  fragment SinglePage on PRISMIC_Page {
    _meta {
      id
      uid
    }

    description
    meta_description
    meta_title
    page_content {
      ... on PRISMIC_PagePage_contentText_section {
        type
        label
        primary {
          rich_text
        }
      }
      ... on PRISMIC_PagePage_contentQuote {
        type
        label
        primary {
          quote_text
        }
      }
      ... on PRISMIC_PagePage_contentFull_width_image {
        type
        label
        primary {
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      ... on PRISMIC_PagePage_contentImage_highlight {
        type
        label
        primary {
          featured_imageSharp {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featured_image
          headline
          title
        }
      }
    }
    title
  }
`
