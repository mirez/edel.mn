/** @jsx jsx */
import { jsx } from "theme-ui"
import { Text } from "@theme-ui/components"

export function handlePrismicParagraph(
  type,
  element,
  content,
  children,
  index
) {
  return (
    <Text as="p" sx={{ variant: "text.body.paragraph" }}>
      {children}
    </Text>
  )
}
