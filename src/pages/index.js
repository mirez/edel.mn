/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "../components"
import { hasPrismicData, hasGatsbyData, getPageSEOProps } from "../utils"
import { BlogPostList } from "../modules/pages/blog/components"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        ...SiteMetadata
      }
    }
    prismic {
      page(uid: "home", lang: "en-us") {
        ...SinglePage
      }
      allPosts {
        ...PostListItems
      }
    }
  }
`

function HomePageContainer({ data, ...props }) {
  return (
    <HomePageView
      page={data.prismic.page}
      posts={data.prismic.allPosts.edges}
      {...props}
    />
  )
}

function HomePageView({ page, posts, ...props }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container" }}>
      <div sx={{ variant: "page.hero" }}>
        <h1 sx={{ variant: "page.heading.one" }}>{title.text}</h1>
        <p sx={{ variant: "page.description" }}>{description.text}</p>
      </div>

      <div sx={{ variant: "page.body" }}>
        <h2 sx={{ variant: "text.h2" }}>From the Blog:</h2>
        <BlogPostList posts={posts} cardGridType="horizontal" />
      </div>
    </div>
  )
}

export default props => {
  const [_, page] = hasPrismicData(props, "page")
  const [, site] = hasGatsbyData(props, "site")
  return (
    <Layout>
      <SEO {...getPageSEOProps(site, page)} />
      <HomePageContainer {...props} data={props.data} />
    </Layout>
  )
}
