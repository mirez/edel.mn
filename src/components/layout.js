/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { GlobalCss } from "./global-styles"
import { Header } from "./header"
import { hasPrismicData } from "../utils"

export function Layout(props) {
  const { data, children } = props
  const { title } = data.site.siteMetadata
  const [_, pages] = hasPrismicData(props, "allPages.edges")
  return (
    <div>
      <GlobalCss />
      <Header siteTitle={title} pages={pages} />
      {children}
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            ...SiteMetadata
          }
        }
        prismic {
          allPages {
            edges {
              node {
                _meta {
                  uid
                }
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
)
