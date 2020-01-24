/** @jsx jsx */
import { jsx } from "theme-ui"
import { BlogPageView } from "./view"
import { StaticQuery, graphql } from "gatsby"

export function BlogPageContainer({ data, ...props }) {
  return <BlogPageView posts={data.prismic.allPosts.edges} {...props} />
}

export default props => (
  <StaticQuery
    query={graphql`
      query BlogPageQuery {
        prismic {
          allPosts {
            ...PostListItems
          }
        }
      }
    `}
    render={data => <BlogPageContainer {...props} data={data} />}
  />
)
