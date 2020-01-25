/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as PrismicLink } from "prismic-reactjs"
import { linkResolver } from "../../../../utils"
import { Link } from "../../../../components"
export function handlePrismicHyperlink(t, element, content, c, index) {
  let result = ""
  const url = PrismicLink.url(element.data, linkResolver)

  if (element.data.link_type === "Document") {
    result = (
      <Link to={url} key={index} sx={{ variant: "links.body" }}>
        {content}
      </Link>
    )
  } else {
    const target = element.data.target
      ? { target: element.data.target, rel: "noopener" }
      : {}
    result = (
      <a href={url} {...target} key={index} sx={{ variant: "links.body" }}>
        {content}
      </a>
    )
  }

  return result
}
