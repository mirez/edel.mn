/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { NavLink } from "./link"

export function HeaderNavigation({ variant }) {
  return (
    <Flex sx={{ variant }}>
      <NavLink to="/blog">Blog</NavLink>
    </Flex>
  )
}

HeaderNavigation.defaultProps = {
  variant: "layout.header.navigation",
}
