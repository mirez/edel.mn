/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import { RichText } from "prismic-reactjs"
import { EmbedFactory } from "../../components"
import { linkResolver } from "../../utils"
import { htmlSerializer, getCodeSerializer } from "./serializers"
import Prism from "prismjs"

import "./prism/prism.css"

export function PostView(props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const body = props.post.body.map(transformSlice)

  return (
    <article>
      <div>{body}</div>
    </article>
  )
}

const sliceTransformStrategy = {
  text: ({ slice, index }) => (
    <RichText
      key={`s-${index}`}
      render={slice.primary.text}
      linkResolver={linkResolver}
      htmlSerializer={htmlSerializer}
    />
  ),
  code: ({ slice, index }) => (
    <RichText
      key={`s-${index}`}
      render={slice.primary.code}
      htmlSerializer={getCodeSerializer(slice.label)}
    />
  ),
  embed: ({ slice, index }) => {
    const {
      primary: { embed },
    } = slice
    return <EmbedFactory key={`s-${index}`} embed={embed} />
  },
  quote: () => {},
  default: () => {},
  image_with_caption: () => {},
}

function transformSlice({ type, ...slice }, index) {
  // console.log(type)
  return sliceTransformStrategy[type]({ slice, index })
}
