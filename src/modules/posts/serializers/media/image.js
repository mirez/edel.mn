/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as PrismicLink } from "prismic-reactjs"
import { linkResolver } from "../../../../utils"
import { Link } from "../../../../components"
export function handlePrismicImage(type, element, content, children, index) {
  let result = (
    <img
      src={element.url}
      alt={element.alt || ""}
      copyright={element.copyright || ""}
    />
  )

  if (element.linkTo) {
    const url = PrismicLink.url(element.linkTo, linkResolver)

    if (element.linkTo.link_type === "Document") {
      result = (
        <Link to={url} key={index}>
          {result}
        </Link>
      )
    } else {
      const target = element.linkTo.target
        ? { target: element.linkTo.target, rel: "noopener" }
        : {}
      result = (
        <a href={url} {...target}>
          {result}
        </a>
      )
    }
  }
  const wrapperClassList = [element.label || "", "block-img"]
  result = (
    <p className={wrapperClassList.join(" ")} key={index}>
      {result}
    </p>
  )
  return result
}
