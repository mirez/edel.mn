/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { GlobalCss } from "./global-styles"

export function Layout({ data, children }) {
  return (
    <div>
      <GlobalCss />
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
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
)
