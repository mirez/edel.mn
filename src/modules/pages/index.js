/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PageTemplate from "./template"
import { Layout, SEO } from "./layout"

import { isBrowser, hasPrismicData, hasGatsbyData } from "../../utils"

export const query = graphql`
  query PageQuery($uid: String!) {
    site {
      siteMetadata {
        ...SiteMetadata
      }
    }
    prismic {
      page(uid: $uid, lang: "en-us") {
        ...SinglePage
      }
    }
  }
`
export default props => {
  const [hasPage, page] = hasPrismicData(props, "page")
  const [hasSite, site] = hasGatsbyData(props, "site")
  if (isBrowser() && !hasPage) {
    const { navigate } = require("gatsby")
    navigate("/")
  } else if (!hasSite || !hasPage) {
    return null
  } else {
    return (
      <Layout>
        <SEO {...getPageSEOProps(site, page)} />
        <PageTemplate page={page} site={site} type={page._meta.uid} />
      </Layout>
    )
  }
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
