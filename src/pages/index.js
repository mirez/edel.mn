/** @jsx jsx */
import { jsx, css } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "../components"
import { hasPrismicData, hasGatsbyData } from "../utils"

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

function HomePageView({ page, ...props }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div>
      <h1>{title.text}</h1>
      <p>{description.text}</p>
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

function getPageSEOProps(site, page) {
  const title = getPageTitle(site, page)
  const { description, ogLanguage: lang, twitter } = site.siteMetadata
  return {
    description,
    lang,
    title,
    twitter,
  }
}

function getPageTitle(site, page) {
  const { title: siteTitle } = site.siteMetadata
  const [pageTitle] = page.title
  return `${siteTitle} | ${pageTitle.text}`
}
