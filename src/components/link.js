/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Link as ThemeLink,
  NavLink as NavigationLink,
} from "@theme-ui/components"
import { Link as GatsbyLink } from "gatsby"

export function Link({ to, ...props }) {
  return <ThemeLink as={GatsbyLink} to={to} {...props} />
}

export function NavLink({ to, ...props }) {
  return <NavigationLink as={GatsbyLink} to={to} {...props} />
}

NavLink.defaultProps = {
  variant: "links.navigation",
}
