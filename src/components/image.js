/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const ImageStrategy = {
  default: FluidImage,
}

export function ImageFactory({ type, ...props }) {
  const Component = ImageStrategy[type]
  return <Component {...props} />
}

ImageFactory.defaultProps = {
  type: "default",
}

function FluidImage(props) {
  return <Img sx={{ variant: "image.fluid" }} fluid={props.image} />
}
