/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { NavLink } from "./link"

export function HeaderNavigation({ variant, pages }) {
  const navLinks = getHeaderNavLinks(pages)

  return <Flex sx={{ variant }}>{navLinks}</Flex>
}

function getHeaderNavLinks(pages) {
  return pages.map(({ node }) => {
    const [title] = node.title
    const { uid } = node._meta
    return <NavLink to={`/${uid}`}>{title.text}</NavLink>
  })
}

HeaderNavigation.defaultProps = {
  variant: "layout.header.navigation",
}
