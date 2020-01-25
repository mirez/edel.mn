/** @jsx jsx */
import { jsx } from "theme-ui"
import { Embed, Box } from "@theme-ui/components"

const embedStrategy = {
  default: DefaultEmbed,
}

export function EmbedFactory(props) {
  return embedStrategy[props.type](props)
}

EmbedFactory.defaultProps = {
  type: "default",
}

function DefaultEmbed({ embed }) {
  return (
    <Box>
      <Embed src={embed.embed_url}></Embed>
    </Box>
  )
}
