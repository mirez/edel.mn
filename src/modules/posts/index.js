/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PostTemplate from "./template"
import { Layout, SEO } from "./layout"

import { isBrowser, hasPrismicData } from "../../utils"

export const query = graphql`
  query BlogPostQuery($uid: String!) {
    site {
      siteMetadata {
        ...SiteMetadata
      }
    }
    prismic {
      post(uid: $uid, lang: "en-us") {
        ...SinglePost
      }
    }
  }
`

export default props => {
  const [hasPost, post] = hasPrismicData(props, "post")
  const [hasSite, site] = hasPrismicData(props, "site")
  if (isBrowser && !hasPost) {
    const { navigate } = require("gatsby")
    navigate("/")
  } else if (!hasSite || !hasPost) {
    return null
  } else {
    return (
      <Layout>
        <SEO {...getPostSEOProps(site, props)} />
        <PostTemplate post={post} site={site} />
      </Layout>
    )
  }
}

function getPostSEOProps(site, post) {
  const title = getPostTitle(site, post)
  const { description, ogLanguage: lang, twitter } = site.siteMetadata
  return {
    description,
    lang,
    title,
    twitter,
  }
}

function getPostTitle(site, post) {
  const { title: siteTitle } = site.siteMetadata
  const [blogTitle] = post.title
  return `${siteTitle} | ${blogTitle.text}`
}
