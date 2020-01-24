/** @jsx jsx */
import { jsx } from "theme-ui"
// import PropTypes from "prop-types"

const CardStrategy = {
  default: DefaultCard,
}

export function CardFactory({ type, ...props }) {
  const Component = CardStrategy[type]
  return <Component {...props} />
}

CardFactory.defaultProps = {
  type: "default",
}

function DefaultCard(props) {
  const variant = getCardSizeVariant(props)
  const bg = getCardBackgroundColor(props)
  return <div sx={{ variant, bg }}>{props.children}</div>
}

function getCardSizeVariant(props) {
  return "cards.medium"
}

function getCardBackgroundColor(props) {
  const { asPaper } = props
  if (asPaper) {
    return "surface"
  } else return "background"
}
