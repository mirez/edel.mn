/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import { GlobalCss } from "./global-styles"
import { Header } from "./header"

export function Layout({ data, children }) {
  const { title } = data.site.siteMetadata
  return (
    <div>
      <GlobalCss />
      <Header siteTitle={title} />
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
