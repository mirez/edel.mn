/** @jsx jsx */
import { jsx } from "theme-ui"

export function Main({ children, ...props }) {
  return (
    <div as="main" sx={{ variant: "layout.main.outer" }}>
      <div sx={{ variant: "layout.main.inner" }}>{children}</div>
    </div>
  )
}
