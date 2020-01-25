/** @jsx jsx */
import { jsx } from "theme-ui"
import { linkResolver } from "../../../utils"
import {
  CardGridFactory,
  CardFactory,
  ImageFactory,
  Link,
} from "../../../components"

export function BlogPostList(props) {
  return (
    <CardGridFactory type={props.cardGridType}>
      {props.posts.map(({ node }) => (
        <BlogPostListItem key={node._meta.id} {...node} />
      ))}
    </CardGridFactory>
  )
}

BlogPostList.defaultProps = {
  cardGridType: "default",
}

export function BlogPostListItem(props) {
  const [title] = props.title
  return (
    <CardFactory type="default" variant="list-item" asPaper={true}>
      <ImageFactory image={props.main_imageSharp.childImageSharp.fluid} />
      <div sx={{ variant: "cards.card.body" }}>
        <Link
          to={linkResolver(props._meta)}
          sx={{ variant: "links.list-item" }}
        >
          {title.text}
        </Link>
        <p sx={{ variant: "text.paragraph" }}>{props.blurb}</p>
      </div>
    </CardFactory>
  )
}
