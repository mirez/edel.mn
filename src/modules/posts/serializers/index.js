import { Elements } from "prismic-reactjs"
import * as text from "./text"
import * as media from "./media"
export { getCodeSerializer } from "./code"

export function htmlSerializer(type, element, content, children, index) {
  switch (type) {
    case Elements.paragraph:
      return text.handlePrismicParagraph(
        type,
        element,
        content,
        children,
        index
      )
    case Elements.heading2:
    case Elements.heading3:
      return text.handlePrismicHeading(type, element, content, children, index)
    case Elements.image:
      return media.handlePrismicImage(type, element, content, children, index)
    case Elements.hyperlink:
      return text.handlePrismicHyperlink(
        type,
        element,
        content,
        children,
        index
      )
    default:
      return null
  }
}
