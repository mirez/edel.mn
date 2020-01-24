/** @jsx jsx */
import { jsx } from "theme-ui"

const GridStrategy = {
  default: DefaultCardGrid,
}

export function CardGridFactory({ type, ...props }) {
  const Component = GridStrategy[type]
  return <Component {...props} />
}

CardGridFactory.defaultProps = {
  type: "default",
}

function DefaultCardGrid(props) {
  return <div sx={{ variant: "cards.grid.default" }}>{props.children}</div>
}
