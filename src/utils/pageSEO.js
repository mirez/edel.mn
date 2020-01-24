export function getPageSEOProps(site, page) {
  const title = getPageTitle(site, page)
  const { description, ogLanguage: lang, twitter } = site.siteMetadata
  return {
    description,
    lang,
    title,
    twitter,
  }
}

export function getPageTitle(site, page) {
  const { title: siteTitle } = site.siteMetadata
  const [pageTitle] = page.title
  return `${siteTitle} | ${pageTitle.text}`
}
