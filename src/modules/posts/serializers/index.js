import { Elements } from "prismic-reactjs"
import * as text from "./text"
import * as media from "./media"
export { getCodeSerializer } from "./code"

export function htmlSerializer(type, e, ct, c, i) {
  switch (type) {
    case Elements.paragraph:
      return text.handlePrismicParagraph(type, e, ct, c, i)
    case Elements.heading2:
    case Elements.heading3:
      return text.handlePrismicHeading(type, e, ct, c, i)
    case Elements.image:
      return media.handlePrismicImage(type, e, ct, c, i)
    case Elements.hyperlink:
      return text.handlePrismicHyperlink(type, e, ct, c, i)
    default:
      return null
  }
}
